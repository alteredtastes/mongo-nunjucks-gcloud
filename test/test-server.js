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
        if(err) console.log(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('name');
        res.body[0].name.should.equal('Michelangelo');
        done();
      });
  });

  it('should list a SINGLE artist on /artist/<id> GET', function(done) {
    var newArtist = new Artist({
      name: 'Radiohead'
    });
    newArtist.save(function(err, data) {
      chai.request(app)
      .get('/org/moma/artist/' + data.id)
      .end(function(err, res) {
        if(err) console.log(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('name');
        res.body.name.should.equal('Radiohead');
        res.body._id.should.equal(data.id);
        done();
      });
    });
  });

  it('should add a SINGLE artist on /artists POST', function(done) {
    chai.request(app)
    .post('/org/moma/artists')
    .send({'name': 'Aphex Twin'})
    .end(function(err, res) {
      if(err) console.log(err);
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('inserted');
      res.body.inserted.should.have.property('_id');
      res.body.inserted.should.have.property('name');
      res.body.inserted.name.should.equal('Aphex Twin');
      done();
    });
  });

  it('should update a SINGLE artist on /artist/<id> PUT', function(done) {
    chai.request(app)
      .get('/org/moma/artists')
      .end(function(err, res) {
        if (err) console.log(err);
        chai.request(app)
          .put('/org/moma/artist/' + res.body[0]._id)
          .send({name: 'Pollock'})
          .end(function(error, response) {
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('updated');
            response.body.updated.should.be.a('object');
            response.body.updated.should.have.property('_id');
            response.body.updated.should.have.property('name');
            response.body.updated.name.should.equal('Pollock')
            done();
          });
      });
  });

  it('should delete a SINGLE artist on /artist/<id> DELETE', function(done) {
    chai.request(app)
    .get('/org/moma/artists')
    .end(function(err, res) {
      chai.request(app)
      .delete('/org/moma/artists/' + res.body[0]._id)
      .end(function(error, response) {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.should.have.property('deleted');
        response.body.deleted.should.be.a('object');
        response.body.deleted.should.have.property('_id');
        response.body.deleted.should.have.property('name');
        response.body.deleted.name.should.equal('Michelangelo');
        done();
      });
    });
  });
});
