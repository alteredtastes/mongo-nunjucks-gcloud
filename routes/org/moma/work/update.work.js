var momaModels = require('../../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function updateWork(req, res) {

  Work.findById(req.params.id, function(err, work) {
    work.title = req.body.title;
    work.save(function(err) {
      if(err) {
        res.json({error: err});
      } else {
        res.json({updated: work});
      }
    });
  });

}

module.exports = updateWork;
