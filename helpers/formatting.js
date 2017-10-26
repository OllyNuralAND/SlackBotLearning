// For all events, call #formatEventData with events and the id from the foundEventType
function formatEvents(filteredEvents, foundEventTypeId) {
    let formattedEvents = filteredEvents.map((filteredEvent) => {
        return formatEventData(filteredEvent, foundEventTypeId)
    });
    return formattedEvents;
}

// Reformat event data into new format and add in eventType 
function formatEventData(event, foundEventType) {
    return newEvent = {
        id: event.id,
        eventType: foundEventType,
        htmlLink: event.htmlLink,
        summary: event.summary,
        location: event.location,
        date: event.start.date,
        startTime: event.start.dateTime,
        endTime: event.end.dateTime
    }
}

module.exports = {
    formatEvents: formatEvents
}