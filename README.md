# Lunch and Learn and CoP Slack bot server

The Slack bot's main purpose is to reply to ANDis queries of upcoming Lunch and Learns and CoPs. The main project goal is to increase attendance to these events leading to more upskill in the workplace.

## Server endpoints

### GET Requests 

```
/events
```

```
/events/CoP
```

```
/events/lunchandlearn
```

### Optional parameters of 
```
maxDate
```

The query parameter to search until - Need to discuss whether bot is doing the parsing of the date format from
'X' units + 
one of the following: 'days', 'weeks', 'months'.

## Getting Started
You will need to authenticate with the Google apis the first time you run this app. 

Follow [these] (https://developers.google.com/google-apps/calendar/quickstart/nodejsnp) instructions to generate a client_secret.json. 

Once you have downloaded the client_secret_XXXXXXXXXX.json

Rename it to client_secret.json

Move it to the highest level in the directory

### Prerequisites

Install dependencies using Node Package Manager:

```
npm install
```

### Installing

run
```
node server.js
```

You will be promped to authenticate with Google.

Enter the URL they provide in the terminal into your browser and authenticate.

Enter the code provided in the browser back into the terminal and hit enter. 

Jest software is used to run tests. 

In certain cases, when the Google Calendar api is required to return calendar events, a mock data set is used to represent this data (found under __mock__). 

In order to run the tests, type this into the terminal: 

```
npm run tests
```

## Running the tests

```
npm run test
```

### And coding style tests

```
jest
```

## Deployment

TBA

## Built With

* [npm] (https://docs.npmjs.com/) - Used to install dependencies

## Contributing

## Versioning

1.0 

## Authors
Nate Williamson-Walsh, Oliver Nural, Mickell Crawford, Graziano Statello, and Jasmien Cels

## License

© 2017 AND Digital. All rights reserved.

## Acknowledgments





