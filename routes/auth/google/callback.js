function googleCallback(req, res, next) {
  res.json({
    message: 'you reached the google callback!'
  });
}

module.exports = googleCallback;
