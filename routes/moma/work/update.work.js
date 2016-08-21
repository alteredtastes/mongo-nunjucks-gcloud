var momaModels = require('../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function updateWork(req, res) {
  Work.findOneAndUpdate(
    {_id: req.body.id}, {$set: {title: req.body.title}}, {new: true}, function(err, updatedWork) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': updatedWork});
    }
  })
}

module.exports = updateWork;
