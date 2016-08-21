var accountModels = require('../../db/models/user/accounts.index');
var User = accountModels.user;

function findUsers(req, res) {
  User.find(function(err, users) {
    if(err) {
      res.json({error: err});
    } else {
      res.json(users);
    }
  });
}

module.exports = findUsers;
