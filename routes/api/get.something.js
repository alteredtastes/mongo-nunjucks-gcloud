function getSomething(req, res){
  res.json({
    message: 'this is the api getSomething call!'
  });
}

module.exports = getSomething;
