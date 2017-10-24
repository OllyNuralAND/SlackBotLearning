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

run
```
node server.js
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

Add additional notes about how to deploy this on a live system

## Built With

* [npm] (https://docs.npmjs.com/) - Used to install dependencies

## Contributing

## Versioning

## Authors

## License

## Acknowledgments





