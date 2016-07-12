'use strict';

module.exports = x_response_time;

function* x_response_time (next) {
  let start = new Date;
  yield next; // thunk functions, promises({ then, catch, finally, notify? }), generators
  let ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
}