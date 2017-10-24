const google = require('googleapis');
const eventTypes = require("./eventTypes");

function formatEvents(events) {
// TODO - Move logic from callback google api request to here
// To check whether singular or array
// Then call respective functions as it's doing already

// Add parameter to this function to say what it is filtering by:
// e.g 'cop', 'lunchandlearn', or 'all'

// return an array of elements filtered

  const eventsToReturn = [];
  for (let eventObject of events) {
    let formattedEvent = formatEventData(eventObject);
    if (formattedEvent !== undefined) {
      eventsToReturn.push(formattedEvent);
    }  
  }
  return eventsToReturn;
}

function formatEventData(event) {
  const eventType = getEventType(event);
  if (eventType == undefined) {
    return;
  }

  return newEvent = {
    id: event.id,
    eventType: eventType,
    htmlLink: event.htmlLink,
    summary: event.summary,
    location: event.location,
    date: event.start.date,
    startTime: event.start.dateTime,
    endTime: event.end.dateTime
  }
}  

function getEventType(event) {
  const foundEvent = eventTypes.find((eventTypeCat) => {
    return event.summary.includes(eventTypeCat.id);
  });

  if (foundEvent == undefined) {
    return;
  } else {
    return foundEvent.id;
  }
}

module.exports = {
  listEvents: function (auth) {
    return new Promise((resolve, reject) => {
      
      let calendar = google.calendar('v3');

      calendar.events.list({
        auth: auth,
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        //   timeMax: (new Date()).toISOString(),
        maxResults: 10 // to be edited later
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
          // if (Array.isArray(events)) {
          //   resolve(formatEvents(events));
          // } else {
          //   resolve(formatEventData(events));
          // }
          resolve(events);
        }
      });
    });
  }
}