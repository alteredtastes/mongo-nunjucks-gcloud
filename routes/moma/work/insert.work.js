var express = require('express');
var momaModels = require('../../../db/models/moma/moma.model.index.js');
var Work = momaModels.work;
// var Work = require('../../../db/models/moma/work.js');

function insertWork(req, res) {
  var newWork = new Work({
    title: req.body.title
  });
  newWork.save(function(err) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': newWork});
    }
  });
}

module.exports = insertWork;
