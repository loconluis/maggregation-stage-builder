# Maggregation Stage Builder

What this class seeks is to simplify the way to create the queries in Mongo, chaining each method, and only receiving parameters, to avoid having a super long pipeline string.

# How to usage
 `$ npm install maggregation-stage-builder`
 ```js
 // Import the module
 const MSB = require('maggregation-stage-builder')

// Init the instance
 let _PIPE_ = new MSB();

 // Simple example for a lookup
_PIPE_.lookup('books', '_id', 'author', 'authorOfTheBook');
 ```


 Therefore it works with the current Mongo [documentation](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/)