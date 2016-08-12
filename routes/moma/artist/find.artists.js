var express = require('express');
var Artist = require('../../../db/models/moma/artist.js');

function findArtists(req, res) {
  Artist.find(function(err, artists) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(artists);
    }
  });
}

module.exports = findArtists;
