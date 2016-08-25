var auth = require('../auth.subroutes');
var accountModels = require('../../../db/models/user/accounts.index');
var User = accountModels.user;

function login(req, res, next) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {

    if(err) {
      res.json({error: err});
    }

    if(!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found'
      });
    } else if (user) {
      if(user.password != req.body.password) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password'
        });
      } else {
        var payload = {
          id: user._id,
          username: user.username,
          admin: user.admin
        };
        var token = auth.jwtutility.createJWT(payload);
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
        // res.redirect('/users/' + req.body.username + '/dashboard?token=' + token);
      }
    }
  });
}

module.exports = login;
