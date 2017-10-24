const eventTypes = require("./eventTypes");

function formatEvents(events, eventFilter) {
  // TODO - Move logic from callback google api request to here
  // To check whether singular or array
  // Then call respective functions as it's doing already
  console.log(eventFilter);
  if (events.length == 0) {
    console.log(eventFilter);
    return ([]);
  } else if (events.length == 1) {
    let notFilteredArray = [];
    const notFilteredEvent = formatEventData(events);
    notFilteredArray.push(notFilteredEvent);
    //filter it by the event type required
    return filterArrayByEventType(notFilteredArray, eventFilter);
  } else {
    let notFilteredEvents = [];
    for (let eventObject of events) {
      console.log(eventObject);
      let formattedEvent = formatEventData(eventObject);
      console.log("Formatted event");
      console.log(formattedEvent);
      if (formattedEvent !== undefined) {
        notFilteredEvents.push(formattedEvent);
      }
    }
    //Filters the array to remove all eventTypes that are not required 
    return filterArrayByEventType(notFilteredEvents, eventFilter);
  }

}


function filterArrayByEventType(notFilteredEvents, eventFilter) {
  if (eventFilter === "learningEvents") {
    return notFilteredEvents; // no need to filter; already contains just both
  } else {
    const filteredEvents = notFilteredEvents.filter(function (i) {
      return i.eventType !== eventFilter;
    });
  }
}

function formatEventData(event) {
  const eventType = getEventType(event);
  console.log(eventType);
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
    // Convert event.summary to lowercase
    // loop over labels and check if summary includes each label
    // if it does then assign it appropriate id
    return event.summary.includes(eventTypeCat.id);
  });

  if (foundEvent == undefined) {
    return;
  } else {
    return foundEvent.id;
  }
}

module.exports = {
    formatEvents: formatEvents
}