var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

  //下面是输出客户端的ip地址
  // console.log(req.ip)

  //下面是简洁的向客户端发送文件，注意之后不要再作其他响应
  // res.sendFile(__dirname + '/01.txt');

  res.render('fileTest')

  //下面是完整的向客户端发送文件发送代码
  // var options = {
  //   root: __dirname + '/../public/',
  //   dotfiles: 'deny',
  //   headers: {
  //     'x-timestamp': Date.now(),
  //     'x-sent': true
  //   }
  // };
  // res.sendFile("share.zip", options, function (err) {
  //   if (err) {
  //     console.log(err);
  //     res.status(err.status).end();
  //   } else {
  //     console.log('Sent　success');
  //   }
  // });
});

module.exports = router;