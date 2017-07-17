const mongoose = require('mongoose');
const url = 'mongodb://192.168.1.133:27017/sustar';
mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
});

let Schema = mongoose.Schema;

let userShema = Schema({
  uid: {type: String},
  password: {type: String},
  nick: {type: String},
  prestige: Number,
  follow: Number,
  Collection: Number,
  Praise:Number,
  address:String,
  School:String,
  company:String,
  Website:String,
  jianjie:String,
  skill:String,
  project:String
});

module.exports.udb = mongoose.model('users', userShema);
