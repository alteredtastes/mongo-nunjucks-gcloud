var express = require('express');
var queries = require('../queries.index.js');
var Work = require('../../models/work.js');

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
