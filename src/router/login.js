const express = require('express');
let Router = express.Router();
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = mongodb.MongoClient;
let urlencodedParser = bodyParser.urlencoded({ extended: false });

Router.post('/', urlencodedParser, (req, res) => {
    // res.send('user list')
    let { username, password } = req.body;
    MongoClient.connect('mongodb://localhost:27017', (err, database) => {
        if (err) throw err;

        let db = database.db('NodeProject');

        let userinf = db.collection('userinf');

        userinf.findOne({ username, password }, (err, result) => {

            if (result) {
                // 登录成功后，给前端发送用户表示：token
                res.send({
                    code: 1,
                    data: result,
                    msg: 'ok'
                })
            } else {
                res.send({
                    code: 0,
                    data: [],
                    msg: 'fail'
                })
            }
        });

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