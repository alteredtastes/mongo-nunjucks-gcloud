var momaModels = require('../../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function deleteArtist(req, res) {

  Artist.findById(req.params.id, function(err, artist) {
    if(err) {
      res.json({error: err});
    } else {
      artist.remove(function(err) {
        if(err) {
          res.json({error: err});
        } else {
          res.json({deleted: artist});
        }
      });
    }
  });

}

module.exports = deleteArtist;
