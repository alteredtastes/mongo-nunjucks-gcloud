// require('dotenv').load();

function googleRedirect(req, res, next){
  res.redirect('/auth/google/callback');
  /* GO TO GOOGLE OAUTH WITH API KEY*/
}

module.exports = googleRedirect;
