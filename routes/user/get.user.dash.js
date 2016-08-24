var accountModels = require('../../db/models/user/accounts.index');
var User = accountModels.user;

function getUserDash(req, res) {
  res.render('dashboard', {
    id: req.decoded.id,
    username: req.decoded.username
  });
}

module.exports = getUserDash;
