const app = require('../server.js');
const request = require('supertest');
const eventTypes = require('../api/eventTypes');

describe("Server endpoint testing", function() {
  
    it("returns a 404 on for a GET request on '/'", function(done) {
      request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

    it("returns a 200 on for a GET request on '/events/learningEvents'", function (done) {
      request(app).get('/events/learningevents').then((response) => {
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
    
    it("returns a list of events on a GET request on '/event-types' from eventTypes", function(done) {
      request(app).get('/event-types').then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(eventTypes);
        done();
      })
    })

    it("returns an 404 on an incorrect GET request on '/events/somebadevent'", function (done) {
      request(app).get('/events/somebadevent').then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      })
    }); 

    it("returns a 404 on for a GET request on '/badevent/somebadevent'", function (done) {
      request(app).get('/badevent/somebadevent').then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      })
    }); 

  });

