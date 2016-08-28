var momaModels = require('../../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function updateArtist(req, res) {

  Artist.findById(req.params.id, function(err, artist) {
    artist.name = req.body.name;
    artist.save(function(err) {
      if(err) {
        res.json({error: err});
      } else {
        res.json({updated: artist});
      }
    });
  });

}

module.exports = updateArtist;
