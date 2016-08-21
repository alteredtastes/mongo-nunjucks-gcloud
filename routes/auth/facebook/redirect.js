// require('dotenv').load();

function facebookRedirect(req, res, next){
  res.redirect('/auth/facebook/callback');
  /* GO TO FACEBOOK OAUTH WITH API KEY*/
}

module.exports = facebookRedirect;
