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
"items" : []
}

module.exports = {
    mockData: mockData,
    originalDate: originalDate,
    date: date,
    dateTime: dateTime
};