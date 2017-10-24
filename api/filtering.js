const eventTypes = require("./eventTypes");

function formatEvents(events, eventFilter) {
  // TODO - Move logic from callback google api request to here
  // To check whether singular or array
  // Then call respective functions as it's doing already
  //console.log(eventFilter);
  //console.log(events);
  if (events.length == 0) {
    console.log("length is 0");
    return ([]);
  } else if (events.length == 1) {
    let notFilteredArray = [];
    console.log("length is one");
    console.log(notFilteredArray);
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
        console.log("length is many");
        console.log(notFilteredEvents.toString);
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

  const eventSummaryLC = event.summary.toLowerCase();

  let foundEvent; 

  //Assign the potential EventTypes labels the correct ID
  for (let eventTypeCat of eventTypes) {
    // For every label within that event type
    for (let label of eventTypeCat.labels) {
      // If the summary includes that label
       if (eventSummaryLC.includes(label)) {
         // Return that event type's ID

         console.log("eventtypecat");
         console.log(eventTypeCat);
         foundEvent =  eventTypeCat.id;
         console.log("Event ID");
         console.log(foundEvent);
       }
    }
  }

  if (foundEvent == undefined) {
    console.log("FoundEvent was undefined");
    return;
  } else {
    return foundEvent;
  }
}

module.exports = {
    formatEvents: formatEvents
}