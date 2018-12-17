const express = require('express');
//引入router
const Router = require('./router');

let app = express();

app.use(express.static('./'));
// 路由
app.use(Router);

app.listen(3333, () => {
    console.log(`server is running on http://localhost:3333`);
})