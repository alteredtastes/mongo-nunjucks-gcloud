var momaModels = require('../../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function findWorkById(req, res) {

  Work.findById(req.params.id, function(err, work) {
      if(err) {
        res.json({error: err});
      } else {
        res.json(work);
      }
  });

}

module.exports = findWorkById;
