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

### Prerequisites

Install dependencies using Node Package Manager:

```
npm install
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Jest software is used to run tests. 

In certain cases, when the Google Calendar api is required to return calendar events, a mock data set is used to represent this data (found under __mock__). 

In order to run the tests, type this into the terminal: 

```
npm run tests
```


### Break down into end to end tests

Explain what these tests test and why

```
Give an example
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





