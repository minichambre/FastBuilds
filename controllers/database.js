const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = process.env.MONGO_CONNECTION_STRING;
// Database Name
const dbName = 'fastbuilds';

class DatabaseController {

    constructor() {

    }

    getConnection(callback) {
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
    
            callback(client.db(dbName));
    
            //client.close();
        });
    }

    search(term, callback) {
        this.getConnection((conn) => {
            const collection = conn.collection('documents');

            let query = {name: new RegExp(term, 'i')};
            collection.find(query).toArray(function(err, docs) {
                console.log('found these...');
                console.log(docs);
                callback(docs);
            }) 
        });


    }


}

module.exports = DatabaseController;