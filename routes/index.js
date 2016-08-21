var express = require('express');
var router = express.Router();
var auth = require('./auth/auth.subroutes');
var subroutes = require('./subroutes');
var moma = require('./moma/moma.subroutes');

router.get('/', function(req, res, next) {
  res.render('index.njk');
});

// router.get('/auth/login', auth.login);
router.post('/auth/login', auth.local.init);
router.post('/auth/facebook', auth.facebook.init);
router.post('/auth/github', auth.github.init);
router.post('/auth/google', auth.google.init);

router.get('/moma/works', auth.facebook.middleware(), moma.findWorks); //auth middleware example
router.get('/moma/work/:id', moma.findWorkById);
router.post('/moma/works', moma.insertWork);
router.put('/moma/work/:id', moma.updateWork);
router.delete('/moma/works/:id', moma.deleteWork);

router.get('/moma/artists', auth.github.middleware(), moma.findArtists); //auth middleware example
router.get('/moma/artist/:id', moma.findArtistById);
router.post('/moma/artists', moma.insertArtist);
router.put('/moma/artist/:id', moma.updateArtist);
router.delete('/moma/artists/:id', moma.deleteArtist);


//USER ROUTES
router.get('/users', subroutes.findUsers);

module.exports = router;
