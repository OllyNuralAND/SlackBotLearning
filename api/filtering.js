const eventTypes = require("./eventTypes");

function formatEvents(events, eventFilter) {
  if (events.length == 0) {
    return ([]);
  // } else if (events.length == 1) {
  //   let notFilteredArray = [];
  //   const notFilteredEvent = formatEventData(events);
  //   notFilteredArray.push(notFilteredEvent);
  //   //filter it by the event type required
  //   return filterArrayByEventType(notFilteredArray, eventFilter);
  } else {
    let notFilteredEvents = [];
    for (let eventObject of events) {
      let formattedEvent = formatEventData(eventObject);
      if (formattedEvent !== undefined) {
        notFilteredEvents.push(formattedEvent);
      }
    }
    //Filters the array to remove all eventTypes that are not required 
    return filterArrayByEventType(notFilteredEvents, eventFilter);
  }
}

function filterArrayByEventType(notFilteredEvents, eventFilter) {
  if (eventFilter === eventTypes[0].id) {
    return notFilteredEvents; // no need to filter; already contains just both
  } else {
    const filteredEvents = notFilteredEvents.filter(function (i) {
      return i.eventType == eventFilter;
    });
    return filteredEvents;
  }
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

  const eventSummaryLC = event.summary.toLowerCase();
  let foundEvent; 
  //Assign the potential EventTypes labels the correct ID
  for (let eventTypeCat of eventTypes) {
    // For every label within that event type
    for (let label of eventTypeCat.labels) {
      // If the summary includes that label
       if (eventSummaryLC.includes(label)) {
         // Return that event type's ID
         foundEvent =  eventTypeCat.id;
       }
    }
  }

  if (foundEvent == undefined) {
    return;
  } else {
    return foundEvent;
  }
}

module.exports = {
    formatEvents: formatEvents
}