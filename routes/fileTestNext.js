var express = require('express');
var router = express.Router();
var upload = require('./fileupload/fileupload');

//文件提交到的路由，文件提交要进行引入一个upload配置，不然没有文件信息
router.post('/', upload.single('avatar'), function (req, res, next) {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});

module.exports = router;