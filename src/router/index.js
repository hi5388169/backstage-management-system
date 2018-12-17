//把路由封装成模块
const express = require('express');

// 引入单独路由模块
const loginRouter = require('./login');
const goodsRouter = require('./goodslist')
const orderlistRouter = require('./orderlist')
    // const categoryRouter = require('./category')

let Router = express.Router();

// 关于用户的路由
Router.use('/login', loginRouter);

// 关于商品的路由
Router.use('/goodslist', goodsRouter);
Router.use('/orderlist', orderlistRouter);

// // 关于商品分类的路由
// Router.use('/category', categoryRouter)

module.exports = Router;