module.exports = function(req, res, next){
    console.log('this is local init.js');
    return next();
}
