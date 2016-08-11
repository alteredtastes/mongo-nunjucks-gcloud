var express = require('express');
var queries = require('../queries.index.js');
var Work = require('../../models/work.js');

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
