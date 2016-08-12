var express = require('express');
var Work = require('../../../db/models/moma/work.js');

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
