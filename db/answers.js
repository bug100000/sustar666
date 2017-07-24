const mongoose = require('mongoose');
const url = 'mongodb://bug100000:myself@ds161262.mlab.com:61262/sustar';
mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
});

let Schema = mongoose.Schema;

let tagsShema = new Schema({
answer: String,
answerid: String,
questionid: String,
commentid: Array,
answerdate: Date,
praise: Number,
adopt: Boolean //是否被采纳
});
module.exports.adb = mongoose.model('answers', tagsShema);  //创建tags集合的模型并共享
