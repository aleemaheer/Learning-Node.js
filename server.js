const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end("Ended");
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));