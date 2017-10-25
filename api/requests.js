const google = require('googleapis');


module.exports = {
  listEvents: function (auth) {
    return new Promise((resolve, reject) => {

      let calendar = google.calendar('v3');

      calendar.events.list({
        auth: auth,
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        //   timeMax: (new Date()).toISOString(),
        maxResults: 100 // to be edited later
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