require('dotenv').load();
var jwt = require('jsonwebtoken');

function createJWT(user) {
  var token = jwt.sign(user, process.env.APP_SECRET, {
    expiresIn: 60
  });
  return token;
}

function verifyJWT(){
  return function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
      jwt.verify(token, process.env.APP_SECRET, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          req.payload = decoded;
          console.log(req.payload);
          next();
        }
      });
    } else {
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  }
}

module.exports = {
  createJWT: createJWT,
  verifyJWT: verifyJWT
}
