//import { koa } from 'koa'

//import * as koa from 'koa'

import Koa = require('koa')

let app = new Koa ();

app.use(async ctx=>{
    ctx.body = "hello koa typescript";
})

app.listen(8888);