let server = require(server.js);
var google = require('googleapis');
const eventTypes = require("./eventTypes");




module.exports = {
    listEvents: function(auth) {
        var calendar = google.calendar('v3');
        calendar.events.list({
          auth: auth,
          calendarId: 'primary',
          timeMin: (new Date()).toISOString(),
        //   timeMax: (new Date()).toISOString(),
          maxResults: 10 // to be edited later
        }, function(err, response) {
          if (err) {
            console.log('The API returned an error: ' + err);
            return;
          }
          var events = response.items;
          if (events.length == 0) {
            console.log('No upcoming events found.');
            return [];
          } else {
            // console.log('Upcoming 10 events:');
            // for (var i = 0; i < events.length; i++) {
            //   var event = events[i];
            //   var start = event.start.dateTime || event.start.date;
            //   console.log('%s - %s', start, event.summary);
            // }

            
            addInEventType(events[i]);

            return events;
          }
        });
      }
  }
  //Calender onject

  //get eventType from server.js
  function addInEventType(event) {
    // refactor later with array if there's time
    console.log(server);
    let eventtype;
      if(event.summary.includes("Cop")) {
        eventtype = eventTypes.cop;
      } else if(event.summary.includes("lunch and learn")) {
        eventtype = eventTypes.landl;
      } else {
        eventtype = eventTypes.other;
      }

  }