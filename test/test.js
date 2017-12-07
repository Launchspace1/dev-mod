var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {
    superagent
      .get('http://localhost:4300/customers')
      .end(function(res){
        expect(res.status).to.equal(200);
  });
});
