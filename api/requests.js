const google = require('googleapis');
const moment = require('moment');


module.exports = {
  listEvents: function (auth, timeLimit) {
    return new Promise((resolve, reject) => {

      console.log("Request timeLimit: " + timeLimit);

      const timeLimitISO = timeLimit; 

      let calendar = google.calendar('v3');

      calendar.events.list({
        auth: auth,
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        //   timeMax: (new Date()).toISOString(),
        maxResults: 100, // to be edited later
        timeMax: timeLimitISO
      }, function (err, response) {
        if (err) {
          console.log('ERROR:');
          console.log(err);
          reject(err);
        }
        let events = response.items;
        if (events.length == 0) {
          resolve([]);
        } else {
          resolve(events);
        }
      });
    });
  }
}