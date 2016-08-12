var express = require('express');
var Work = require('../../../db/models/moma/work.js');

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
