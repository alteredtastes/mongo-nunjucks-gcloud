var momaModels = require('../../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function deleteWork(req, res) {

  Work.findById(req.params.id, function(err, work) {
    if(err) {
      res.json({error: err});
    } else {
      work.remove(function(err) {
        if(err) {
          res.json({error: err});
        } else {
          res.json({deleted: work});
        }
      });
    }
  });

}

module.exports = deleteWork;
