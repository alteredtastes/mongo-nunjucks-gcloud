var express = require('express');
var Work = require('../../db/models/work.js');

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
