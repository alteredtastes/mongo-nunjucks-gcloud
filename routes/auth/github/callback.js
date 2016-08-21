function githubCallback(req, res, next) {
  res.json({
    message: 'you reached the github callback!'
  });
}

module.exports = githubCallback;
