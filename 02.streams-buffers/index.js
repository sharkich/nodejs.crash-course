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

const reader = new fs.createReadStream('1.txt', {
  encode: 'utf-8'
});
const writer = process.stdout;

const transformer = new stream.Transform();

transformer._transform = (chank, enc, cb) => {
  transformer.push(chank.toString().toUpperCase());
  cb();
};

reader.pipe(transformer).pipe(writer);
