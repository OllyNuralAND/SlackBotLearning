let google = require('googleapis');
const eventTypes = require("./eventTypes");

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
