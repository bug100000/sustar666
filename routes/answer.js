var express = require('express');
var router = express.Router();
var qdb = require('../db/questions.js')

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.query);
  var state;
  if (req.session.uid != undefined) {
      state = true;
  } else {
      state = false;
  };
  qdb.qdb.find({"_id": req.query.id}, function(err, data){
    // console.log(data+"=======================================");
    res.render('answer', {state: state, data: data[0]});
  })
});

module.exports = router;
