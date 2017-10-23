const express = require('express');
const app = express();
const apiwrapper = require('./api/api-wrapper');
const requests = require('./api/requests');
const eventTypes = require('./api/eventTypes');
let oauth2Client;
apiwrapper.authSetup((authClientResponse) => {
    oauth2Client = authClientResponse;
});

// TODO - Change this to use environment variables
const port = 8081;

// Dynamic endpoint receiving a param of eventtype to test
app.get('/events/:eventType', function (req, res) {
    const foundEvent = eventTypes.find((event) => {
        return event.label == req.params.eventType;
    });

    getData(foundEvent).then(retrievedData => {
        if (foundEvent) {
            res.send(retrievedData);
        } else {
            res.send([]);
        }
    });
});

function getData(event) {
    return new Promise ((resolve, reject) => {
        requests.listEvents(oauth2Client)
            .then(requestEvents => {
                resolve(requestEvents);
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