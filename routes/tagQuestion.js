var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  if (req.session.uid != undefined) {
    res.render('tagQuestion', {state: "true"});
  }else {
    res.render('tagQuestion', {state: "false"});
  }
});

module.exports = router;
