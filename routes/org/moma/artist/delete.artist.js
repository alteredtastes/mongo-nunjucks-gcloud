var momaModels = require('../../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function deleteArtist(req, res) {

  Artist.remove({
    _id: req.body.id
  }, function(err) {
      if(err) {
        res.json({error: err});
      } else {
        res.json({success: req.body.id + ' was deleted.'});
      }
  });

}

module.exports = deleteArtist;
