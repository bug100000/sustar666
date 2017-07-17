var express = require('express');
var router = express.Router();
var tagdb = require('../db/tag.js');

/* GET home page. */
router.get('/', function(req, res) {
  // console.log(req.query);
  tagdb.tags.findOne({
      tag: req.query.tag
  }, function(err, doc) {
      if (err) console.log(err);
      if(doc){
        if (req.session.uid != undefined) {
          res.render('tagQuestion', {state: "true",tagName:doc.tag,describe:doc.describe});
        }else {
          res.render('tagQuestion', {state: "false",tagName:doc.tag,describe:doc.describe});
        }
      }
  });
});

module.exports = router;
