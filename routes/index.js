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
router.get('/auth/facebook/callback', auth.facebook.callback); /*GET FOR TESTING, CHANGE TO POST!!!*/
router.get('/auth/github', auth.github.redirect);
router.get('/auth/github/callback', auth.github.callback); /*GET FOR TESTING, CHANGE TO POST!!!*/
router.get('/auth/google', auth.google.redirect);
router.get('/auth/google/callback', auth.google.callback); /*GET FOR TESTING, CHANGE TO POST!!!*/


/*MOMA ROUTES*/
  /*ARTIST*/
router.get('/moma/artists', /* JWT VERIFY MIDDLEWARE HERE */ auth.facebook.middleware(), moma.artist.findAll); //AUTH MIDDLEWARE EXAMPLE
router.get('/moma/artist/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.artist.findOneById);
router.post('/moma/artists', /* JWT VERIFY MIDDLEWARE HERE */ moma.artist.insertOne);
router.put('/moma/artist/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.artist.updateOne);
router.delete('/moma/artists/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.artist.deleteOne);

  /*WORK*/
router.get('/moma/works', /* JWT VERIFY MIDDLEWARE HERE */ auth.local.middleware(), moma.work.findAll); //AUTH MIDDLEWARE EXAMPLE
router.get('/moma/work/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.work.findOneById);
router.post('/moma/works', /* JWT VERIFY MIDDLEWARE HERE */ moma.work.insertOne);
router.put('/moma/work/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.work.updateOne);
router.delete('/moma/works/:id', /* JWT VERIFY MIDDLEWARE HERE */ moma.work.deleteOne);

/*USER ROUTES*/
router.get('/users', subroutes.findUsers);

module.exports = router;
