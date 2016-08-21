var express = require('express');
var momaModels = require('../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function insertArtist(req, res) {
  var newArtist = new Artist({
    name: req.body.name
  });
  newArtist.save(function(err) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': newArtist});
    }
  });
}

module.exports = insertArtist;
