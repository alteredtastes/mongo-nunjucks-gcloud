var express = require('express');
var router = express.Router();
var auth = require('./auth/auth.subroutes');
var subroutes = require('./subroutes');
var moma = require('./moma/moma.subroutes');

router.get('/', function(req, res, next) {
  res.render('index.njk');
});

//MOMA ROUTES
  //WORK
router.get('/moma/works', moma.findWorks);
router.get('/moma/work/:id', moma.findWorkById);
router.post('/moma/works', moma.insertWork);
router.put('/moma/work/:id', moma.updateWork);
router.delete('/moma/works/:id', moma.deleteWork);

  //ARTIST
router.get('/moma/artists', moma.findArtists);
router.get('/moma/artist/:id', moma.findArtistById);
router.post('/moma/artists', moma.insertArtist);
router.put('/moma/artist/:id', moma.updateArtist);
router.delete('/moma/artists/:id', moma.deleteArtist);


//USER ROUTES
router.get('/users', subroutes.findUsers);

module.exports = router;
