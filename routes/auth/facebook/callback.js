function facebookCallback(req, res, next) {
  res.json({
    message: 'you reached the facebook callback!'
  });
}

module.exports = facebookCallback;
