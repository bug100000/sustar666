#!/usr/bin/env node

/**
 * Module dependencies.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bug100000:myself@ds161262.mlab.com:61262/sustar';
var app = require('../app');
var debug = require('debug')('demo:server');
var http = require('http');
var cp = require('child_process');

/**
 * Get port from environment and store in Express.
 */
var duankou = Math.round((1+Math.random())*1000)
console.log(duankou)

var port = normalizePort(process.env.PORT || duankou);
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
var io = require('socket.io')(server);
var db = require('../db/users.js');
var tagdb = require('../db/tag.js');
var qdb = require('../db/questions.js');
var udb = require('../db/users.js');



io.on("connection", function(socket) {
    socket.on('login', function(uid, password) {
        console.log(uid);
        console.log(password);
        db.udb.find({
            "uid": uid,
            "password": password
        }, function(err, data) {
            if (data[0] == null) {
                socket.emit('login-err')
            } else {
                // req.session.uid = uid;
                socket.emit('login-success')
            };
        });
    });
    socket.on('register', function(nick, uid, password) {
        console.log(nick);
        console.log(uid);
        console.log(password);
        db.udb.find({
            "uid": uid
        }, function(err, data) {
            if (data[0] == null) {
                var user = new db.udb({
                    uid: uid,
                    nick: nick,
                    password: password
                });
                user.save(function(err, data) {
                    socket.emit('register-success');
                })
            } else {
                // req.session.uid = uid;
                socket.emit('cunzai')
            };
        });
    });
    socket.on('tagDescribe', function(data) {

        tagdb.tags.findOne({
            tag: data.tag
        }, function(err, doc) {
            if (err) console.log(err);
            // console.log(doc);
            io.emit('tagDescribe1', {
                des: doc.describe,
                issuesnum: doc.issuesnum
            });
        });
    });
    socket.on('question', function(title, tags, code, uid){
      console.log(uid);
      var question = new qdb.qdb({
        title: title,
        tags: tags,
        code: code,
        personuid: uid
      })
      question.save(function(err, data){
        console.log("save");
        if (err) {
          console.log(err);
        }else {
          socket.emit('question');
        }
      })
    });
});
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}

//未成功
// process.on('message', function(m){
//     console.log('Child got message:', m)
// });

// procrss.send({foo: 'bar'})
