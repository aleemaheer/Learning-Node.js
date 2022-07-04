const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hi there");
})

console.clear();

const userId = process.env.USER_ID;
const userKey = process.env.USER_KEY;
console.log(`User Id: ${userId}  \nUser Key: ${userKey}`);

process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
process.env.NODE_ENV; // "development"


server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
