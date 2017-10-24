const express = require('express');
const app = express();
const googleauth = require('./api/googleauth');
const requests = require('./api/requests');
const filtering = require('./api/filtering');
const eventTypes = require('./api/eventTypes');
// While we don't have any auth, it will throw a reject promise
// So it will return [].
let oauth2Client;
googleauth.authSetup((authClientResponse) => {
    oauth2Client = authClientResponse;
});

// TODO - Change this to use environment variables
const port = 8081;

app.get('/event-types', function(req, res) {
    res.send(eventTypes);
})

// Dynamic endpoint receiving a param of eventtype to test
app.get('/events/:eventType', function (req, res) {

    const foundEvent = eventTypes.find((event) => {
        return event.id == req.params.eventType;
    });

    if (!foundEvent) {
        res.sendStatus(404);
        return;
    }

    getData(foundEvent).then(retrievedData => {
        if (retrievedData) {
            res.send(retrievedData);
        } else {
            res.send([]);
        }
    });
});

// We need to right some logic here to differentiate between the different requests
function getData(event) {
    return new Promise ((resolve, reject) => {
        requests.listEvents(oauth2Client)
            .then(requestEvents => {
                console.log(event);
                let filteredEvents = filtering.formatEvents(requestEvents, event.id);
                resolve(filteredEvents);
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
  console.log('Example app listening on port ' + port);
});

// Export the app so we can run tests against it! 
exports = module.exports = app;