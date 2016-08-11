var express = require('express');
var queries = require('../queries.index.js');
var Work = require('../../models/work.js');

function updateWork(req, res) {
  Work.find({
    _id: req.params.id
  }, function(err, updatedWork) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': updatedWork});
    }
  })
}

module.exports = updateWork;
