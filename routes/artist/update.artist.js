var express = require('express');
var Artist = require('../../db/models/artist.js');

function updateArtist(req, res) {
  Artist.find({
    _id: req.params.id
  }, function(err, updatedArtist) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': updatedArtist});
    }
  })
}

module.exports = updateArtist;
