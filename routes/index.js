var express = require('express');
var router = express.Router();
var auth = require('./auth/auth.subroutes');
var subroutes = require('./subroutes');
var moma = require('./moma/moma.subroutes');

router.get('/', (req, res) => {res.render('index.njk');});

/*AUTH ROUTES*/
router.get('/auth/login', (req, res) => {res.render('login.njk');});
router.post('/auth/login', auth.local.login);
router.get('/auth/register', (req, res) => {res.render('register.njk');});
router.post('/auth/register', auth.local.register);

router.get('/auth/facebook', auth.facebook.redirect);
router.get('/auth/facebook/callback', auth.facebook.callback); /*GET FOR TESTING, CHANGE TO POST!!!*/
router.get('/auth/github', auth.github.redirect);
router.get('/auth/github/callback', auth.github.callback); /*GET FOR TESTING, CHANGE TO POST!!!*/
router.get('/auth/google', auth.google.redirect);
router.get('/auth/google/callback', auth.google.callback); /*GET FOR TESTING, CHANGE TO POST!!!*/


/*MOMA ROUTES*/
router.get('/moma/works', /* JWT VERIFY MIDDLEWARE HERE */ auth.local.middleware(), moma.findWorks); //AUTH MIDDLEWARE EXAMPLE
router.get('/moma/work/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.findWorkById);
router.post('/moma/works', /* JWT VERIFY MIDDLEWARE HERE */ moma.insertWork);
router.put('/moma/work/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.updateWork);
router.delete('/moma/works/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.deleteWork);

router.get('/moma/artists', /* JWT VERIFY MIDDLEWARE HERE */ auth.facebook.middleware(), moma.findArtists); //AUTH MIDDLEWARE EXAMPLE
router.get('/moma/artist/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.findArtistById);
router.post('/moma/artists', /* JWT VERIFY MIDDLEWARE HERE */ moma.insertArtist);
router.put('/moma/artist/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.updateArtist);
router.delete('/moma/artists/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.deleteArtist);


/*USER ROUTES*/
router.get('/users', subroutes.findUsers);

module.exports = router;
