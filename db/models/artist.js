var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
  title: String
});

module.exports = mongoose.model('artist', artistSchema);
