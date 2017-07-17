var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  if (req.session.uid != undefined) {
    res.render('index', {state: "true"});
  }else {
    res.render('index', {state: "false"});
  }
});

module.exports = router;
