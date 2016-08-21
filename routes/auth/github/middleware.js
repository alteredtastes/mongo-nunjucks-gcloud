module.exports = function(){
  return function(req, res, next){
    console.log('this is github middleware.js');
    return next();
  }
}
