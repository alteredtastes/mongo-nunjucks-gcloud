var express = require('express');
var Artist = require('../../../db/models/moma/artist.js');

function insertArtist(req, res) {
  var newArtist = new Artist({
    title: req.body.title
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
