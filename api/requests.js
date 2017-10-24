const google = require('googleapis');
const eventTypes = require("./eventTypes");

function formatEvents(events) {
  let eventsToReturn = [];
  for (let eventObject of events) {
    let formattedEvent = formatEventData(eventObject);
    if (formattedEvent !== undefined) {
      eventsToReturn.push(formattedEvent);
    }  
  }
  return eventsToReturn;
}

function formatEventData(event) {
  let eventType = getEventType(event);
  if (eventType == undefined) {
    return;
  }

  let newEvent = {
    id: event.id,
    eventType: eventType,
    htmlLink: event.htmlLink,
    summary: event.summary,
    location: event.location,
    date: event.start.date,
    startTime: event.start.dateTime,
    endTime: event.end.dateTime
  }

  return newEvent;
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
          if (Array.isArray(events)) {
            resolve(formatEvents(events));
          } else {
            resolve(formatEventData(events));
          }
        }
      });
    });
  }
}