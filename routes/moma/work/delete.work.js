var momaModels = require('../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function deleteWork(req, res) {
  Work.remove({
    _id: req.body.id
  }, function(err) {
      if(err) {
        res.json({'ERROR': err});
      } else {
        res.json({'SUCCESS': req.body.id + ' was deleted.'});
      }
  });
}

module.exports = deleteWork;
