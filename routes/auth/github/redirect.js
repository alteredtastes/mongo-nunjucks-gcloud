// require('dotenv').load();

function githubRedirect(req, res, next){
  res.redirect('/auth/github/callback');
  /* GO TO GITHUB OAUTH WITH API KEY*/
}

module.exports = githubRedirect;
