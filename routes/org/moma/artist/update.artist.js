var momaModels = require('../../../../db/models/moma/moma.model.index');
var Artist = momaModels.artist;

function updateArtist(req, res) {

  Artist.findOneAndUpdate(
    {
      _id: req.params.id}, {$set: {name: req.body.name}}, {new: true}, function(err, updatedArtist) {
    if(err) {
      res.json({error: err});
    } else {
      res.json({updated: updatedArtist});
    }
  });

}

module.exports = updateArtist;
