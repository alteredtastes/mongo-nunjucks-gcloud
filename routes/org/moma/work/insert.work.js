var momaModels = require('../../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function insertWork(req, res) {

  var newWork = new Work({
    title: req.body.title
  });

  newWork.save(function(err) {
    if(err) {
      res.json({error: err});
    } else {
      res.json({inserted: newWork});
    }
  });

}

module.exports = insertWork;
