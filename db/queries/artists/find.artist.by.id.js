var express = require('express');
var queries = require('../queries.index.js');
var Work = require('../../models/work.js');

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
