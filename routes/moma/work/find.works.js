var momaModels = require('../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function findWorks(req, res) {
  Work.find(function(err, works) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(works);
    }
  });
}

module.exports = findWorks;
