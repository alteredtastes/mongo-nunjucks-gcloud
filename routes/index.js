var express = require('express');
var router = express.Router();
var auth = require('./auth/auth.subroutes');
var subroutes = require('./subroutes');
var moma = require('./moma/moma.subroutes');

router.get('/', function(req, res) {
  res.render('index.njk');
});

router.get('/auth/login', function(req, res){
  res.render('login.njk');
});

router.post('/auth/login', auth.local.init);
router.get('/auth/facebook', auth.facebook.redirect);
router.get('/auth/facebook/callback', auth.facebook.callback);
router.get('/auth/github', auth.github.redirect);
router.get('/auth/github/callback', auth.github.callback);
router.get('/auth/google', auth.google.redirect);
router.get('/auth/google/callback', auth.google.callback);

router.get('/moma/works', /* VERIFY JWT HERE */ auth.facebook.middleware(), moma.findWorks); //auth middleware example
router.get('/moma/work/:id', /* VERIFY JWT HERE */ moma.findWorkById);
router.post('/moma/works', /* VERIFY JWT HERE */ moma.insertWork);
router.put('/moma/work/:id', /* VERIFY JWT HERE */ moma.updateWork);
router.delete('/moma/works/:id', /* VERIFY JWT HERE */ moma.deleteWork);

router.get('/moma/artists', /* VERIFY JWT HERE */ auth.github.middleware(), moma.findArtists); //auth middleware example
router.get('/moma/artist/:id', /* VERIFY JWT HERE */ moma.findArtistById);
router.post('/moma/artists', /* VERIFY JWT HERE */ moma.insertArtist);
router.put('/moma/artist/:id', /* VERIFY JWT HERE */ moma.updateArtist);
router.delete('/moma/artists/:id', /* VERIFY JWT HERE */ moma.deleteArtist);


//USER ROUTES
router.get('/users', subroutes.findUsers);

module.exports = router;
