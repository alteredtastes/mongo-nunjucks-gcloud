var express = require('express');
var router = express.Router();
var auth = require('./auth/auth.subroutes');
var subroutes = require('./subroutes');
var moma = require('./moma/moma.subroutes');

router.get('/', (req, res) => {res.render('index.njk');});

/*AUTH ROUTESS*/
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


/*MOMA ROUTES*/
  /*ARTIST*/
router.get('/moma/artists', auth.jwt.verifyJWT(), moma.artist.findArtists);
router.get('/moma/artist/:id', auth.jwt.verifyJWT(), moma.artist.findArtistById);
router.post('/moma/artists', auth.jwt.verifyJWT(), moma.artist.insertArtist);
router.put('/moma/artist/:id', auth.jwt.verifyJWT(), moma.artist.updateArtist);
router.delete('/moma/artists/:id', auth.jwt.verifyJWT(), moma.artist.deleteArtist);

  /*WORK*/
router.get('/moma/works', auth.jwt.verifyJWT(), moma.work.findWorks);
router.get('/moma/work/:id', auth.jwt.verifyJWT(), moma.work.findWorkById);
router.post('/moma/works', auth.jwt.verifyJWT(), moma.work.insertWork);
router.put('/moma/work/:id', auth.jwt.verifyJWT(), moma.work.updateWork);
router.delete('/moma/works/:id', auth.jwt.verifyJWT(), moma.work.deleteWork);

/*USER ROUTES*/
router.get('/users', subroutes.findUsers);

module.exports = router;
