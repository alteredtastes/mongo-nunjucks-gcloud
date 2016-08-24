module.exports.local = {
  middleware: require('./local/middleware'),
  login: require('./local/login'),
  register: require('./local/register')
}

module.exports.facebook = {
  middleware: require('./facebook/middleware'),
  redirect: require('./facebook/redirect'),
  callback: require('./facebook/callback')
}

module.exports.github = {
  middleware: require('./github/middleware'),
  redirect: require('./github/redirect'),
  callback: require('./github/callback')
}

module.exports.google = {
  middleware: require('./google/middleware'),
  redirect: require('./google/redirect'),
  callback: require('./google/callback')
}

module.exports.jwtutility = require('./jwt.utility');
