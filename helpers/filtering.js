// Filter events to just return the ones pertaining to the search parameter
function filterEvents(events, eventType) {
  // Get the ID and Labels from the eventType we receive - check for errors
  const labels = eventType.labels;
  if (!labels) return [];
  // Filter each event checking if the summary contains any of the labels in the eventType
  let filteredEvents = events.filter(event => {
    if (!eventType) {
      return false;
    } else {
      // If atleast one is found in the labels array, return true
      return labels.some(label => {
        return event.summary.toLowerCase().includes(label);
      });
    }
  });
  return filteredEvents;
}

module.exports = {
  filterEvents: filterEvents
}