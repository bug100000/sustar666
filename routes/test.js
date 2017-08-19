var express = require('express');
var router = express.Router();
var qdb = require('../db/questions.js')
var adb = require('../db/answers.js')

/* GET home page. */
router.get('/', function (req, res) {
  // console.log(req.ip)
  // res.sendFile(__dirname + '/01.txt');
  // console.log(res.files)
  res.render('test')

  // var options = {
  //   root: __dirname + '/../public/',
  //   dotfiles: 'deny',
  //   headers: {
  //     'x-timestamp': Date.now(),
  //     'x-sent': true
  //   }
  // };

  // res.sendFile("share.zip", options, function (err) {
  //   if (err) {
  //     console.log(err);
  //     res.status(err.status).end();
  //   } else {
  //     console.log('Sent');
  //   }
  // });
});

module.exports = router;