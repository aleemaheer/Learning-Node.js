const fs = require('fs');

fs.open('data.txt', 'a+', (err, fd) => {
    console.log(fd);
});