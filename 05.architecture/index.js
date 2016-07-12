require('dotenv').config();

//console.log('ENV VARS: ');
//console.log(process.env);

const koa = require('koa'),
    app = koa(),
    middleware = require('koa-app/middleware');

middleware(app);

app.use(function *() {
  this.body = 'Hello world';
});

app.listen(3000);

