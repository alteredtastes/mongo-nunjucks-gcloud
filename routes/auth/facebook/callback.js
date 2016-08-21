/*GRAB AND STORE DATA, RES.SEND*/

function facebookCallback(req, res, next) {
  res.json({
    message: 'you reached the facebook callback!'
  });
}

module.exports = facebookCallback;
