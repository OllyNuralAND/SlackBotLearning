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

            
            formatData(events[0]);

            return events;
          }
        });
      },

      formatEventData: function(event) {
        let eventType = getEventType(event);
    
        let newEvent = new Object();
        newEvent.id = event.id;
        newEvent.eventType = eventType;
        newEvent.htmlLink = event.htmlLink;
        newEvent.summary = event.summary;
        newEvent.location = event.location;
        newEvent.date = event.start.date;
        newEvent.startTime = event.start.dateTime;
        newEvent.endTime = event.end.dateTime;
    
        return newEvent;
      },

      getEventType: function(event) {
        // refactor later with array if there's time
        let eventType;
          if(event.summary.includes("Cop")) {
            eventType = eventTypes.cop;
          } else if(event.summary.includes("lunch and learn")) {
            eventType = eventTypes.landl;
          } else {
            eventType = eventTypes.other;
          }
        return eventType;
      }
}