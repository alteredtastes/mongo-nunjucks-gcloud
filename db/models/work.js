var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workSchema = new Schema({
  title: String
});

module.exports = mongoose.model('Work', workSchema);
