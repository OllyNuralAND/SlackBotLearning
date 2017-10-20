var app = require('../server.js');
var request = require('supertest');

describe("Server endpoint testing", function() {
  
    it("returns a 404 on for a GET request on '/'", function(done) {
      request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

    it("returns a 200 on for a GET request on '/events/learningEvents'", function (done) {
      request(app).get('/events/learningEvents').then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      })
    }); 


    it("returns a 200 on for a GET request on '/events/cop'", function (done) {
      request(app).get('/events/cop').then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      })
    }); 


    it("returns a 200 on for a GET request on '/events/landl'", function (done) {
      request(app).get('/events/landl').then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      })
    }); 

    it("returns a 404 on for a GET request on '/events/somebadevent'", function (done) {
      request(app).get('/events/somebadevent').then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      })
    }); 

    it("returns a 404 on for a GET request on '/badevent/somebadevent'", function (done) {
      request(app).get('/somebadevent/somebadevent').then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      })
    }); 

  });

