let requests = require('../../api/requests');
let moment = require('moment');
jest.mock('googleapis');
let google = require('googleapis');

// This needs to be using a specific time 
// Test delays means the times are sometimes out of sync
let originalDate = moment();
let dateTime = originalDate.toISOString();
let date = originalDate.format('YYYY-MM-DD');

describe("Checking the parameters sent to Google Calendar are correct", function () {

  it("Should return three responses for getting all learningEvents", function (done) {
    requests.listEvents().then(response => {
      expect(response).toHaveLength(3);
    })
  });

  it("Given a single event, a single data object is returned is correct", function (done) {
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
});
