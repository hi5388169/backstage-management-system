const express = require('express');
let Router = express.Router();
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = mongodb.MongoClient;
// let urlencodedParser = bodyParser.urlencoded({ extended: false });
Router.get('/', (req, res) => {
    // res.send('user list')
    // console.log(req);
    let { curr, nums } = req.query;
    // console.log(curr)
    // console.log(nums)

    // let { username, password } = req.body;
    MongoClient.connect('mongodb://localhost:27017', (err, database) => {
        if (err) throw err;
        let db = database.db('NodeProject');

        let goodslist = db.collection('goodslist');

        goodslist.find().sort({ "ID": 1 }).skip((curr - 1) * nums).limit(nums * 1).toArray((err, result) => {
            // result：数据查询结果
            console.log(result)
            res.send({
                code: 0,
                msg: '',
                count: 10,
                data: result
            });
        });

        // 通过 db.myCollection.find().sort({"ID":1}).skip(10).limit(10)
        // 命令，将其根据ID排序后，跳过10，查询10条，结果为10-19条的数据。

        // result = db.goodslist.find();
        // console.log(result);

        // console.log(res)
        // res.send({
        //     code: 0,
        //     msg: '',
        //     count: 10,
        //     data: result
        // });

        // goodslist.findOne({ username, password }, (err, result) => {

        //     if (result) {
        //         // 登录成功后，给前端发送用户表示：token
        //         res.send({
        //             code: 1,
        //             data: result,
        //             msg: 'ok'
        //         })
        //     } else {
        //         res.send({
        //             code: 0,
        //             data: [],
        //             msg: 'fail'
        //         })
        //     }
        // });

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