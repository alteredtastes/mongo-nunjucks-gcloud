require('dotenv').load();
var jwt = require('jsonwebtoken');

function createJWT(user) {
  var token = jwt.sign(user, process.env.APP_SECRET, {
    expiresIn: 60
  });
  return token;
}

function verifyJWT(){
  console.log('this is the verifyJWT function!');
}

module.exports = {
  createJWT: createJWT,
  verifyJWT: verifyJWT
}
