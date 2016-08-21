var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  admin: {
    type: Boolean
  }
});

module.exports = mongoose.model('User', userSchema);
