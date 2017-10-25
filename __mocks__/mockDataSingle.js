const moment = require('moment');

const originalDate = moment("2013-08-26 16:55:00");
const dateTime =  originalDate.toISOString();
const date = originalDate.format('YYYY-MM-DD');

const mockData = 
{
"kind": "calendar#events",
"etag": "\"p32oalglnmq3te0g\"",
"summary": "onural@and.digital",
"updated": "2017-10-23T18:58:03.422Z",
"timeZone": "Europe/London",
"accessRole": "owner",
"defaultReminders": [
 {
  "method": "popup",
  "minutes": 10
 }
],
"nextPageToken": "CigKGjAwZTV1YXRjMzY1YWo4NjVyNXA2ZmNydm5xGAEggIDAx_WxhvcVGg0IABIAGLCqwre2h9cC",
"items" : [{
    "kind": "calendar#event",
    "etag": "etag",
    "id": "123",
    "status": "string",
    "htmlLink": "www.google.com",
    "created": "datetime",
    "updated": "datetime",
    "summary": "CoP meeting blah",
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
}]
}

module.exports = {
    mockData: mockData,
    originalDate: originalDate,
    date: date,
    dateTime: dateTime
};