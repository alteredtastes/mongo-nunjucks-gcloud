var momaModels = require('../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

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
