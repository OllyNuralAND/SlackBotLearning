const requests = require('../../api/requests');
const moment = require('moment');
jest.mock('googleapis');
const google = require('googleapis');

// This needs to be using a specific time 
// Test delays means the times are sometimes out of sync
const originalDate = google.originalDate;
const dateTime = google.dateTime;
const date = google.date;

describe("Checking the get of google API information is returned in the correct format", function () {

  it("Should return three responses for getting all learningEvents", function (done) {
    requests.listEvents().then(response => {
      expect(response).toHaveLength(2);
      done();
    })
  });

  it("Check that the first event returned from #listEvents is in the correct structure and has all fields defined correctly", function (done) {
    requests.listEvents().then(response => {
      expect(response[0].id).toBe('123');
      expect(response[0].eventType).toBe('CoP');
      expect(response[0].htmlLink).toBe('www.google.com');
      expect(response[0].summary).toBe('CoP meeting blah');
      expect(response[0].location).toBe('location');
      expect(response[0].date).toBe(date);
      expect(response[0].startTime).toBe(dateTime);
      expect(response[0].endTime).toBe(dateTime);
      done();
    });
  });

  it("Check that the second event returned from #listEvents is in the correct structure and has all fields defined correctly", function (done) {
    requests.listEvents().then(response => {
      expect(response[1].id).toBe('124');
      expect(response[1].eventType).toBe('landl');
      expect(response[1].htmlLink).toBe('www.google.com');
      expect(response[1].summary).toBe('landl meeting blah');
      expect(response[1].location).toBe('location');
      expect(response[1].date).toBe(date);
      expect(response[1].startTime).toBe(dateTime);
      expect(response[1].endTime).toBe(dateTime);
      done();
    });
  });
});


describe("Checking that the data returned contains a certain number of elements in the returned array ", function () {

  it("Check that the array is not empty from #listEvents", function (done) {
    requests.listEvents().then(response => {
      expect(response).not.toBeNull();
      done();
    });
  });


  it("Check that the array contains one element that contains CoP from #listEvents", function (done) {
    requests.listEvents().then(response => {
      expect(response.includes("CoP"));
      done();
    });
  });

});

