"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koa_controllers_1 = require("koa-controllers");
let app = new Koa();
koa_controllers_1.useControllers(app, __dirname + '/controllers/**/*.controllers.js', {
    multipart: {
        dest: './uploads'
    }
});
app.listen(8888);
//# sourceMappingURL=index.js.map