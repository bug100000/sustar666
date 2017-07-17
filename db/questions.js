const mongoose = require('mongoose');
const url = 'mongodb://192.168.1.133:27017/sustar';
mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
});

let Schema = mongoose.Schema;

let userShema = Schema({
  title: {type: String},
  questioncontent: {type: String},
  personuid: {type: String},
  focusperson: {type: Array},
  answeruid: {type: Array},
  state: {type: String},
  tags: {type: Array},
  questionview: {type: Number},
  questiondate: {type: Date},
  praise: {type: Number},
  code: {type: String},
  lastdate: {type: Date},
});

module.exports.qdb = mongoose.model('questions', userShema);
