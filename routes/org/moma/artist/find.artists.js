var momaModels = require('../../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function findArtists(req, res) {

  Artist.find(function(err, artists) {
    if(err) {
      res.json({error: err});
    } else {
      res.json(artists);
    }
  });
}

module.exports = findArtists;
  
