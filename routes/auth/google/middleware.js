module.exports = function(){
  return function(req, res, next){
    console.log('this is google middleware.js');
    return next();
  }
}
