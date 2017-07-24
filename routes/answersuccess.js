var express = require('express');
var router = express.Router();
var adb = require('../db/answers.js');

/* GET home page. */
router.get('/', function(req, res) {
  var answer = new adb.adb({
    answer: req.query.code,
    answerid: req.session.uid,
    questionid: req.query.questionid,
    answerdate: new Date()
  });
  answer.save(function(err){
    if (err) {
      console.log(err);
    }
  })
  redirest('/answer');

});


module.exports = router;
