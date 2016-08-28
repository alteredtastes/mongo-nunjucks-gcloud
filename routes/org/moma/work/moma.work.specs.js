function momaWorkSpecs(app, chai, chaiHttp, mongoose, should) {

  var Work = require('../../../../db/models/moma/work');

  describe('ORG/MOMA/WORK ROUTES', function() {

    Work.collection.drop();

    beforeEach(function(done) {
      var newWork = new Work({
        title: 'Statue of David'
      });
      newWork.save(function(err) {
        done();
      });
    });
    afterEach(function(done) {
      Work.collection.drop();
      done();
    });

    it('should list ALL works on org/moma/works GET', function(done) {
      chai.request(app)
      .get('/org/moma/works')
      .end(function(err, res) {
        if(err) console.log(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('title');
        res.body[0].title.should.equal('Statue of David');
        done();
      });
    });

    it('should list a SINGLE work on /work/<id> GET', function(done) {
      var newWork = new Work({
        title: 'Kid A'
      });
      newWork.save(function(err, data) {
        chai.request(app)
        .get('/org/moma/work/' + data.id)
        .end(function(err, res) {
          if(err) console.log(err);
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body.should.have.property('title');
          res.body.title.should.equal('Kid A');
          res.body._id.should.equal(data.id);
          done();
        });
      });
    });

    it('should add a SINGLE work on /works POST', function(done) {
      chai.request(app)
      .post('/org/moma/works')
      .send({'title': 'Syro'})
      .end(function(err, res) {
        if(err) console.log(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('inserted');
        res.body.inserted.should.have.property('_id');
        res.body.inserted.should.have.property('title');
        res.body.inserted.title.should.equal('Syro');
        done();
      });
    });

    it('should update a SINGLE work on /work/<id> PUT', function(done) {
      chai.request(app)
      .get('/org/moma/works')
      .end(function(err, res) {
        if (err) console.log(err);
        chai.request(app)
        .put('/org/moma/work/' + res.body[0]._id)
        .send({title: 'One: Number 31, 1950'})
        .end(function(error, response) {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('updated');
          response.body.updated.should.be.a('object');
          response.body.updated.should.have.property('_id');
          response.body.updated.should.have.property('title');
          response.body.updated.title.should.equal('One: Number 31, 1950');
          done();
        });
      });
    });

    it('should delete a SINGLE work on /work/<id> DELETE', function(done) {
      chai.request(app)
      .get('/org/moma/works')
      .end(function(err, res) {
        chai.request(app)
        .delete('/org/moma/works/' + res.body[0]._id)
        .end(function(error, response) {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('deleted');
          response.body.deleted.should.be.a('object');
          response.body.deleted.should.have.property('_id');
          response.body.deleted.should.have.property('title');
          response.body.deleted.title.should.equal('Statue of David');
          done();
        });
      });
    });
  });
}

module.exports = momaWorkSpecs;
