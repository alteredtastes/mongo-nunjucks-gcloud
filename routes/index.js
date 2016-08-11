var express = require('express');
var router = express.Router();
var subroutes = require('./subroutes.js');

router.get('/', function(req, res, next) {
  res.render('index.njk');
});

router.get('/works', subroutes.findWorks);
router.get('/work/:id', subroutes.findWorkById);
router.post('/works', subroutes.insertWork);
router.put('/work/:id', subroutes.updateWork);
router.delete('/work/:id', subroutes.deleteWork);

router.get('/artists', subroutes.findArtists);
router.get('/artist/:id', subroutes.findArtistById);
router.post('/artists', subroutes.insertArtist);
router.put('/artist/:id', subroutes.updateArtist);
router.delete('/artist/:id', subroutes.deleteArtist);

router.get('/users', subroutes.findUsers);

module.exports = router;
