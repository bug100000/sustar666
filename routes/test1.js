var express = require('express');
var router = express.Router();
var qdb = require('../db/questions.js')
var upload = require('./fileupload');

/* GET home page. */
// router.post('/', function (req, res) {
//   console.log(req.ip)
//   console.log(req.file)
// });

router.post('/', upload.single('avatar'), function (req, res, next) {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});

module.exports = router;