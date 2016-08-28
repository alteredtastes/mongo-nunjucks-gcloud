var momaModels = require('../../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function deleteWork(req, res) {

  Work.remove({
    _id: req.body.id
  }, function(err) {
      if(err) {
        res.json({error: err});
      } else {
        res.json({deleted: req.body.id + ' was deleted.'});
      }
  });

}

module.exports = deleteWork;
