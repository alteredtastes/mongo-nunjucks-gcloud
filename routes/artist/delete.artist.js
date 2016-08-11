var express = require('express');
var Artist = require('../../db/models/artist.js');

function deleteArtist(req, res) {
  Artist.remove({
    _id: req.params.id
  }, function(err) {
      if(err) {
        res.json({'ERROR': err});
      } else {
        res.json({'SUCCESS': req.params.title + ' was deleted.'});
      }
  });
}

module.exports = deleteArtist;
