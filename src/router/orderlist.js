const express = require('express');
let Router = express.Router();
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = mongodb.MongoClient;
// let urlencodedParser = bodyParser.urlencoded({ extended: false });

Router.get('/', (req, res) => {

    MongoClient.connect('mongodb://localhost:27017', (err, database) => {
        if (err) throw err;

        let db = database.db('NodeProject');

        let orderlist = db.collection('orderlist');

        orderlist.find().toArray((err, result) => {
            res.send({
                data: result
            })
        })

        // 关闭数据库，避免资源浪费
        database.close();
    })
});

// Router.get('/:username', (req, res) => {
//     res.send({
//         path: req.url,
//         username: req.params.username
//     })
// });


module.exports = Router;