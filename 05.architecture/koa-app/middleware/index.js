const fs = require('fs-jetpack');
const log = require('koa-app/lib/log');
const chain = require('koa-app/middleware/chain');

module.exports = bootstrap;

// function bootstrap(app) {
//   fs.find(__dirname, {matching: ['!*.*']}, 'inspect')
//     .reduce((pv, cv) => {
//       cv.type === 'dir' && cv.name !== 'middleware' && pv.push(cv.name);
//       return pv
//     }, [])
//     .forEach( dirName => {
//       log.info('load %s', dirName)
//       app.use(require(`koa-app/middleware/${dirName}`))
//     })
//
//   log.success('Middleware Bootstrap success')
// }

function bootstrap (app) {
    chain.forEach(mdl => {
        log.info('load %s', mdl)
        app.use(require(`koa-app/middleware/${mdl}`))
    })
    log.success('Middleware Bootstrap success')
}