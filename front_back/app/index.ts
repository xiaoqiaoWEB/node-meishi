//import { koa } from 'koa'

//import * as koa from 'koa'

import Koa = require('koa')
import { useControllers } from 'koa-controllers';

let app = new Koa ();

useControllers(app, __dirname + '/controllers/**/*.controllers.js', {
    multipart: {
        dest: './uploads'
    }
});

app.listen(8888);