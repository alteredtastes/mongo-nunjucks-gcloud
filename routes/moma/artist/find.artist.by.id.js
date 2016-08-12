var express = require('express');
var Artist = require('../../../db/models/moma/artist.js');

function findArtistById(req, res) {
  Artist.find({
    _id: req.params.id
  }, function(err, artist) {
      if(err) {
        res.json({'ERROR': err});
      } else {
        res.json({'SUCCESS': artist});
      }
  })
}

module.exports = findArtistById;
