const express = require('express');
const app = express();

// TODO - Change this to use environment variables
const port = 8081;

const eventTypes = [ 
    {label : "cop"},
    {label : "landl"},
    {label : "learningEvents"} 
];

// Dynamic endpoint receiving a param of eventtype to test
app.get('/events/:eventType', function (req, res) {
    const foundEvent = eventTypes.find((event) => {
        return event.label == req.params.eventType;
    });
    if (foundEvent) {
        res.send(getData(foundEvent));
    } else {
        res.send([]);
    }
})

function getData(event) {
    return event;
}

// Else any requests not already hit will end up here for a 404
app.get('/', function (req, res) {
    console.log("Hit 404 API");
    res.sendStatus(404);
})

// Start the server! 
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

// Export the app so we can run tests against it! :)
exports = module.exports = app;