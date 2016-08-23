var momaModels = require('../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function findArtistById(req, res) {

  Artist.find({
    _id: req.params.id
  }, function(err, artist) {
      if(err) {
        res.json({error: err});
      } else {
        res.json({success: artist});
      }
  });

}

module.exports = findArtistById;
