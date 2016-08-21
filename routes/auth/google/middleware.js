function googleMiddleware(){
  return function(req, res, next){
    console.log('this is google middleware.js');
    return next();
  }
}

module.exports = googleMiddleware;
