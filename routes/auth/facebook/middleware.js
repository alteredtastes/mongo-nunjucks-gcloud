var express = require('express');

module.exports = function(req, res, next){
  console.log('this is facebook init.js');
  next();
}
