var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var state;
  if (req.session.uid != undefined) {
      state = true;
  } else {
      state = false;
  };
  res.render('answer', {state: state});
});

module.exports = router;
