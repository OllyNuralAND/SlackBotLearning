let requests = require('../../api/requests');
let moment = require('moment');

let originalDate = moment();
let dateTime = originalDate.toISOString();
let date = originalDate.format('YYYY-MM-DD');

describe("Checking the data returned from our function are correct given mocks", function() {
    it("Given a single event, a single data object is returned is correct", function(done) {
        requests.formatEventData(mockData).then((response) => {
            expect(response.id).toBe('123');
            expect(response.eventType).toBe('CoP');
            expect(response.htmlLink).toBe('www.google.com');
            expect(response.summary).toBe('summary');
            expect(response.location).toBe('location');
            expect(response.date).toBe(date);
            expect(response.startTime).toBe(dateTime);
            expect(response.endTime).toBe(dateTime);
            done();
        });
    });
});

let mockData = {
    "kind": "calendar#event",
    "etag": "etag",
    "id": "123",
    "status": "string",
    "htmlLink": "www.google.com",
    "created": "datetime",
    "updated": "datetime",
    "summary": "summary",
    "description": "string",
    "location": "location",
    "colorId": "string",
    "creator": {
      "id": "string",
      "email": "string",
      "displayName": "string",
      "self": "boolean"
    },
    "organizer": {
      "id": "string",
      "email": "string",
      "displayName": "string",
      "self": "boolean"
    },
    "start": {
      "date": date,
      "dateTime": dateTime,
      "timeZone": "string"
    },
    "end": {
      "date": date,
      "dateTime": dateTime,
      "timeZone": "string"
    },
    "endTimeUnspecified": "boolean",
    "recurrence": [
      "string"
    ],
    "recurringEventId": "string",
    "originalStartTime": {
      "date": "date",
      "dateTime": "datetime",
      "timeZone": "string"
    },
    "transparency": "string",
    "visibility": "string",
    "iCalUID": "string",
    "sequence": "integer",
    "attendees": [
      {
        "id": "string",
        "email": "string",
        "displayName": "string",
        "organizer": "boolean",
        "self": "boolean",
        "resource": "boolean",
        "optional": "boolean",
        "responseStatus": "string",
        "comment": "string",
        "additionalGuests": "integer"
      }
    ],
    "attendeesOmitted": "boolean",
    "extendedProperties": {
      "private": {
        "(key)": "string"
      },
      "shared": {
        "(key)": "string"
      }
    },
    "hangoutLink": "string",
    "gadget": {
      "type": "string",
      "title": "string",
      "link": "string",
      "iconLink": "string",
      "width": "integer",
      "height": "integer",
      "display": "string",
      "preferences": {
        "(key)": "string"
      }
    },
    "anyoneCanAddSelf": "boolean",
    "guestsCanInviteOthers": "boolean",
    "guestsCanModify": "boolean",
    "guestsCanSeeOtherGuests": "boolean",
    "privateCopy": "boolean",
    "locked": "boolean",
    "reminders": {
      "useDefault": "boolean",
      "overrides": [
        {
          "method": "string",
          "minutes": "integer"
        }
      ]
    },
    "source": {
      "url": "string",
      "title": "string"
    },
    "attachments": [
      {
        "fileUrl": "string",
        "title": "string",
        "mimeType": "string",
        "iconLink": "string",
        "fileId": "string"
      }
    ]
  }