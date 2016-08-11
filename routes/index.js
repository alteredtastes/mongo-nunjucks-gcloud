var express = require('express');
var router = express.Router();
var queries = require('../db/queries/queries.index.js');

router.get('/', function(req, res, next) {
  res.render('index.njk');
});

router.get('/works', queries.findWorks);
router.get('/work/:id', queries.findWorkById);
router.post('/works', queries.insertWork);
router.put('/work/:id', queries.updateWork);
router.delete('/work/:id', queries.deleteWork);

router.get('/artists', queries.findArtists);
router.get('/artist/:id', queries.findArtistById);
router.post('/artists', queries.insertArtist);
router.put('/artist/:id', queries.updateArtist);
router.delete('/artist/:id', queries.deleteArtist);

module.exports = router;
