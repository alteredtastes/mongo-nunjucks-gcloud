process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

var app = require('../app');
var Artist = require('../db/models/moma/artist');

var should = chai.should();
chai.use(chaiHttp);

app.set('test', function(){
  port = 3000;
});

describe('Artists', function() {

  Artist.collection.drop();

  beforeEach(function(done) {
    var newArtist = new Artist({
      name: 'Michelangelo'
    });
    newArtist.save(function(err) {
      done();
    });
  });
  afterEach(function(done) {
    Artist.collection.drop();
    done();
  });

  it('should list ALL artists on org/moma/artists GET', function(done) {
    chai.request(app)
      .get('/org/moma/artists')
      .end(function(err, res) {
        console.log(app.settings.env);
        if(err) console.log(err);
        res.should.have.status(200);
        done();
      });
  });
  it('should list a SINGLE artist on /artist/<id> GET');
  it('should add a SINGLE artist on /artists POST');
  it('should update a SINGLE artist on /artist/<id> PUT');
  it('should delete a SINGLE artist on /artist/<id> DELETE');
});
