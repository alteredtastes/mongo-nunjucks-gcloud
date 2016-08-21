var express = require('express');
var momaModels = require('../../../db/models/moma/moma.model.index');
var Work = momaModels.work;

function findWorkById(req, res) {
  Work.find({
    _id: req.params.id
  }, function(err, work) {
      if(err) {
        res.json({'ERROR': err});
      } else {
        res.json({'SUCCESS': work});
      }
  })
}

module.exports = findWorkById;
