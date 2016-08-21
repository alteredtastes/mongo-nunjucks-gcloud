var express = require('express');
var momaModels = require('../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function deleteArtist(req, res) {
  Artist.remove({
    _id: req.body.id
  }, function(err) {
      if(err) {
        res.json({'ERROR': err});
      } else {
        res.json({'SUCCESS': req.body.id + ' was deleted.'});
      }
  });
}

module.exports = deleteArtist;
