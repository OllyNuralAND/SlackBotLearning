const express = require('express');
const app = express();
const googleauth = require('./api/googleauth');
const requests = require('./api/requests');
const eventTypes = require('./api/eventTypes');
const moment = require('moment');
const filtering = require('./helpers/filtering');
const formatting = require('./helpers/formatting');
// While we don't have any auth, it will throw a reject promise
// So it will return [].
// Once the auth setup has been complete, oauth2Client is returned for requests to use
let oauth2Client;
googleauth.authSetup((authClientResponse) => {
    oauth2Client = authClientResponse;
});

// TODO - Change this to use environment variables
const port = 8081;

// Endpoint to return the different events we are currently set up to listen to
// Event types are in /api/eventTypes
app.get('/event-types', function(req, res) {
    res.send(eventTypes);
})

// Generic endpoint for each eventType e.g 'cop', 'learningevents'... from /api/eventTypes
// Retrieves data from Google APIs and returns it to user
app.get('/events/:eventType', function (req, res) {

    // Check if param passed exists as an event in our array. If not, return 404
    const foundEvent = eventTypes.find(event => event.id === req.params.eventType)

    if (!foundEvent) {
        res.send([]);
    } else {
        // If it does, get the data for that event and return it to user in promise
        getData(foundEvent).then(retrievedData => {
            if (retrievedData) {
                res.send(retrievedData);
            } else {
                res.send([]);
            }
        });
    }
});

// We need to right some logic here to differentiate between the different requests
function getData(foundEventType) {
    //Default the maxtime limit for the listEvents paramenter to be one month from now. 
    //TODO: make dynmic once its interpreted from the front end. 
    let date = moment().add(1, 'M').toISOString(); 

    return new Promise ((resolve, reject) => {
        requests.listEvents(oauth2Client, date)
            .then(requestEvents => {
                let filteredEvents = filtering.filterEvents(requestEvents, foundEventType);
                let formattedEvents = formatting.formatEvents(filteredEvents, foundEventType.id);
                resolve(formattedEvents);
            }, error => {
                reject(error);
            });
    });
}

// Else any requests not already hit will end up here for a 404
app.get('/', function (req, res) {
    res.sendStatus(404);
});

// Start the server! 
app.listen(port, function () {
  console.log(`Example app listening on ${port} `);
});

// Export the app so we can run tests against it! 
exports = module.exports = app;