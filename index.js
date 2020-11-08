const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
//const url = 'mongodb://localhost:27017';
const url = process.env.MONGO_CONNECTION_STRING;

// Database Name
const dbName = 'fastbuilds';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  