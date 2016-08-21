var express = require('express');
var momaModels = require('../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function updateArtist(req, res) {
  Artist.findOneAndUpdate(
    {_id: req.body.id}, {$set: {name: req.body.name}}, {new: true}, function(err, updatedArtist) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': updatedArtist});
    }
  })
}

module.exports = updateArtist;
