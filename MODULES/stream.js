// STREAMS IN NODE JS

const http = require('http');
const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile(`${__dirname}/data.txt`, (err, data) => {
//         if (err) {
//             console.log(err.message);
//         }
//         res.end(data);
//     })
// })
// .listen(3000, () => console.log('Server listening on 3000'));

// Here is the same thing using stream

// http.createServer((req, res) => {
//     const stream = fs.createReadStream('data.txt');
//     stream.pipe(res);
// })
// .listen(3000, () => console.log("Listening on port 3000"))

// Creating a readable stream
// const Stream = require('stream');
// const readableStream = new Stream.Readable();
// readableStream._read = (data) => { console.log(data) };
// readableStream.push('hi');
// readableStream.push('hello');

// Creating a writeable stream
// const Stream = require('stream');
// const writeableStream = new Stream.Writable();
// writeableStream._write = (chunk, encoding, next) => {
//     console.log(chunk.toString());
//     next();
// } 
// process.stdin.pipe(writeableStream);

// Reading data from a readable stream
const Stream = require('stream');

const readableStream = new Stream.Readable({
    read() {},
});

const writeableStream = new Stream.Writable();

writeableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString());
    next();
};

readableStream.pipe(writeableStream);
readableStream.push('hi');
readableStream.push('ho');
// We also consume a readable stream using the readable event
readableStream.on('readable', () => {
    console.log(readableStream.read().toString());
});
writeableStream.write('meow');
// Ending or closing the stream
readableStream.on('close', () => writeableStream.end());
writeableStream.on('close', () => console.log('ended'));

// Destroying the stream
readableStream.destroy();