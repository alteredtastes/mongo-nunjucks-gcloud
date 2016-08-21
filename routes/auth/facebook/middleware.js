function facebookMiddleware(){
  return function(req, res, next){
    console.log('this is facebook middleware.js');
    return next();
  }
}

module.exports = facebookMiddleware;
