module.exports = function(){
  return function(req, res, next){
    console.log('this is local middleware.js');
    return next();
  }
}
