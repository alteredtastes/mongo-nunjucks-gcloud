var express = require('express');
var User = require('../../db/models/user.js');

function findUsers(req, res) {
  User.find(function(err, users) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(users);
    }
  });
}

module.exports = findUsers;
