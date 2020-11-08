const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = process.env.MONGO_CONNECTION_STRING;
// Database Name
const dbName = 'fastbuilds';
// Use connect method to connect to the server
setTimeout(() => {
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        client.close();
    });
},5000)

//Start express server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


//Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  })
  