var momaModels = require('../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function findWorkById(req, res) {
  Work.find({
    _id: req.params.id
  }, function(err, work) {
      if(err) {
        res.json({error: err});
      } else {
        res.json({success: work});
      }
  })
}

module.exports = findWorkById;
