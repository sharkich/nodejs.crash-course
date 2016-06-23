/**
 * Buffers
 * const b = new Buffer(10).fill(0).concate(new Buffer('some text', 'utf8'));
 *
 * Streams
 *
 * EvenEmitter
 */

const fs = require('fs');
const stream = require('stream');

const reader = new fs.createReadStream('./02.streams-buffers/1.txt', {
  encode: 'utf-8'
});
const writer = process.stdout;

const transformer = new stream.Transform();

transformer._transform = (chunk, enc, cb) => {
  let chunkArray = chunk.toString().toUpperCase().split('\n');
  let interval = setInterval(() => {
    let el = chunkArray.shift();
    transformer.push(el + '\n');
    if (!chunkArray.length) {
      clearInterval(interval);
      return cb();
    }
  }, 1000);
};

reader.pipe(transformer).pipe(writer);
