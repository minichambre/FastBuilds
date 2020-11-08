const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const DatabaseController = require('./controllers/database.js');

// Use connect method to connect to the server
// setTimeout(() => {
//     var db =  new DatabaseController();
// },5000)

//Start express server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//public assets
app.use(express.static('public'));

//Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  })


//Champion Search retrieval
app.get('/builds/:champion', (req, res) => {
    let db = new DatabaseController();
    let champion = req.params.champion;

    db.search(champion, (championData) => {
        console.log('called');
        console.log(championData);
        res.json(championData);
    })

    // res.json({
    //     name: 'Braum',
    //     lastUpdated: '01/01/2001',
    //     builds: [
    //         {
    //             position: 'jungle',
    //             startingItems: [
    //                 'Dorans Shield', 'Hunters Machete'
    //             ]
    //         }
    //     ]
    // })
  })

app.get('/data/add', (req, res) => {
    const collection = db.collection('documents');

    collection.insertMany([
        {
            name: 'Braum',
            lastUpdated: '01/01/2001',
            builds: [
                {
                    position: 'jungle',
                    startingItems: [
                        'Dorans Shield', 'Hunters Machete'
                    ]
                }
            ]
        },
        {
            name: 'Jax',
            lastUpdated: '04/07/2018',
            builds: [
                {
                    position: 'adc',
                    startingItems: [
                        'Health Potion', 'Onion'
                    ]
                }
            ]
        },
        {
            name: 'Pyke',
            lastUpdated: '28/12/2019',
            builds: [
                {
                    position: 'Support',
                    startingItems: [
                        'Just death'
                    ]
                }
            ]
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
    })
});
  