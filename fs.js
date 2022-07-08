const fs = require('fs');
fs.readFile('data.json', (err, data) => {
    if (err) console.log(err.message);
    else console.log(data);
})