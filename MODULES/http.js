const http = require('http');

// console.log(http.METHODS) // returns all the methods
// console.log(http.STATUS_CODES); // returns all the status codes

// SIMPLE HTTP SERVER
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 500;
    res.statusMessage = 'Internal Server Error';
    res.end("Hi there");
});

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));