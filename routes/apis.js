var express = require('express');
var router = express.Router();
var udb = require('../db/users.js');
var qdb = require('../db/questions.js');

router.get('/login', function(req, res) {
  res.json({"name": "十里风"})
});
router.get('/', function(req, res) {
  qdb.qdb.find({}, function(err, data){
    if (err) {
      console.log(err);
    }else {
      console.log(data);
      res.json(data);
    }
  });
});
router.post('/register', function(req, res) {
  udb.udb.find({
      "uid": req.body.uid
  }, function(err, data) {
      if (data[0] == null) {
          var user = new udb.udb({
              uid: req.body.uid,
              nick: req.body.nick,
              password: req.body.password
          });
          user.save(function(err, data) {
              res.json(true)
          })
      } else {
          res.json(false)
      };
  });
});
router.post('/login', function(req, res) {
  udb.udb.find({
      "uid": req.body.uid,
      "password": req.body.password
  }, function(err, data) {
      if (data[0] == null) {
        res.json(false);
      } else {
        res.json(true);
      };
  });
});

module.exports = router;
