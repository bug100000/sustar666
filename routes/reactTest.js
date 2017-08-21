var express = require('express');
var router = express.Router();
var qdb = require('../db/questions.js')
var adb = require('../db/answers.js')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('reactTest')
});

module.exports = router;