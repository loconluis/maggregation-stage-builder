# Maggregation Stage Builder

What this class seeks is to simplify the way to create the queries in Mongo, chaining each method, and only receiving parameters, to avoid having a super long pipeline string.
Therefore it works with the current Mongo [documentation](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/)