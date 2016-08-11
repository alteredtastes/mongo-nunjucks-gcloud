var express = require('express');
var Work = require('../../db/models/work.js');

function deleteWork(req, res) {
  Work.remove({
    _id: req.params.id
  }, function(err) {
      if(err) {
        res.json({'ERROR': err});
      } else {
        res.json({'SUCCESS': req.params.title + ' was deleted.'});
      }
  });
}

module.exports = deleteWork;
