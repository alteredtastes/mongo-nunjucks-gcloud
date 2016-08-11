var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
