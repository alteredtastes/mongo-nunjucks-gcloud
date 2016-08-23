var express = require('express');
var router = express.Router();
var auth = require('./auth/auth.subroutes');
var subroutes = require('./subroutes');
var org = require('./org/org.subroutes.js');

router.get('/', (req, res) => {res.render('index.njk');});

/*AUTH ROUTES*/
  /*LOCAL*/
router.get('/auth/login', (req, res) => {res.render('login.njk');});
router.post('/auth/login', auth.local.login);
router.get('/auth/register', (req, res) => {res.render('register.njk');});
router.post('/auth/register', auth.local.register);

  /*OAUTH*/
router.get('/auth/facebook', auth.facebook.redirect);
router.post('/auth/facebook/callback', auth.facebook.callback);
router.get('/auth/github', auth.github.redirect);
router.post('/auth/github/callback', auth.github.callback);
router.get('/auth/google', auth.google.redirect);
router.post('/auth/google/callback', auth.google.callback);

/*ORGANIZATIONS*/
  /*MOMA ROUTES*/
    /*ARTIST*/
router.get('/org/moma/artists', /*auth.jwt.verifyJWT(), */org.moma.artist.findArtists);
router.get('/org/moma/artist/:id', /*auth.jwt.verifyJWT(), */org.moma.artist.findArtistById);
router.post('/org/moma/artists', /*auth.jwt.verifyJWT(), */org.moma.artist.insertArtist);
router.put('/org/moma/artist/:id', /*auth.jwt.verifyJWT(), */org.moma.artist.updateArtist);
router.delete('/org/moma/artists/:id', /*auth.jwt.verifyJWT(), */org.moma.artist.deleteArtist);

    /*WORK*/
router.get('/org/moma/works', /*auth.jwt.verifyJWT(), */org.moma.work.findWorks);
router.get('/org/moma/work/:id', /*auth.jwt.verifyJWT(), */org.moma.work.findWorkById);
router.post('/org/moma/works', /*auth.jwt.verifyJWT(), */org.moma.work.insertWork);
router.put('/org/moma/work/:id', /*auth.jwt.verifyJWT(), */org.moma.work.updateWork);
router.delete('/org/moma/works/:id', /*auth.jwt.verifyJWT(), */org.moma.work.deleteWork);

/*USER ROUTES*/
router.get('/users', subroutes.findUsers);

module.exports = router;
