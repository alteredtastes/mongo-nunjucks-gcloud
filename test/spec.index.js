process.env.NODE_ENV = 'test';

var app = require('../app');

app.set('test', function(){
  port = 3000;
});

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');
var should = chai.should();
chai.use(chaiHttp);

require('../routes/org/moma/artist/moma.artist.specs')(app, chai, chaiHttp, mongoose, should);
require('../routes/org/moma/work/moma.work.specs')(app, chai, chaiHttp, mongoose, should);
