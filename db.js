// instantiate dynamoDB client

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient({});

module.exports = client;
