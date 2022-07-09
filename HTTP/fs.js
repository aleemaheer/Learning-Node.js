// const fs = require('fs');

// fs.open('data.txt', 'a+', (err, fd) => {
//      console.log(fd);
// });

// try {
//     const fd = fs.openSync('date.txt', 'a+');
//     console.log(fd)
// }
// catch (err) {
//     console.log(err);
// }

// const fs = require('fs/promises');
// // Or we can use => const fs = require('fs').promises before v14
// async function example() {
//     let fileHandle;
//     try {
//         fileHandle = await fs.open('data.txt', 'r');
//         //console.log(fileHandle.fd);
//         console.log(await fileHandle.readFile({ encoding: 'utf-8'}));
//     }
//     catch (err) {
//         console.log(err);
//     }
//     finally {
//         await fileHandle.close();
//     }
// }

// example();

// Just for practice

// const fs = require("fs/promises");

// async function practice() {
// 	let fileHandle;
// 	try {
// 		fileHandle = await fs.open("data.txt", "r");
// 		console.log(fileHandle.fd);
// 		console.log(await fileHandle.readFile({ encoding: "utf8" }));
// 	} catch (err) {
// 		console.log(err);
// 	} finally {
// 		await fileHandle.close();
// 	}
// }

// practice();

// NODE JS FILE STATS

// const fs = require('fs/promises');

// async function fileStat() {
//     try {
//         const stats = await fs.stat('data.txt', 'r');
//         console.log(stats.isFile()); // true
//         stats.isDirectory(); // false
//         stats.isSymbolicLink(); // false
//         console.log("Size: ", stats.size);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// fileStat();

// NODE JS FILE PATHS

// const path= require('path');

// const extName = path.extname('data.txt');
// const dirName = path.dirname('data.txt');
// const baseName = path.basename('data.txt');
// const fileName = path.basename('data.txt', path.extname('data.txt')); 
// console.log(extName)
// console.log(dirName)
// console.log(baseName)
// console.log(fileName);

// Joining path
// const name = 'Joe';
// const joinedPath = path.join('/', 'users', name, 'notes.txt'); // /users/name/notes.txt

// console.log(joinedPath);

// Resolving path
// const resolvedPath = path.resolve('data.txt');
// path.resolve('tmp', 'joe.txt'); // '/Users/joe/tmp/joe.txt' if run from my home folder
// path.resolve('/etc', 'joe.txt'); // '/etc/joe.txt'
// path.normalize('/users/joe/..//test.txt'); // '/users/test.txt'

// console.log(resolvedPath);

// Reading file with NODE JS

// const fs = require('fs');
// fs.readFile('data.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })

// Alternate in syncronous way

// const fs = require('fs');
// try {
//     const data = fs.readFileSync('data.txt', 'utf8');
//     console.log(data);
// }
// catch (err) {
//     console.log(err.message);
// }

// Alternate usng fs/promises way
// const fs = require('fs/promises');

// async function readFile() {
//     try {
//         const data = await fs.readFile('data.txt', { encoding: 'utf-8'});
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }
// readFile();

// Writing files with nodejs
// const fs = require('fs');
// const content = 'Hello there!';
// fs.writeFile('data.txt', content, err => {
//     if (err) {
//         console.log(err.message);
//     }
//     console.log("File written successfully");
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err.message);
//         }
//         console.log(data);
//     })
// })

// Alternative syncronous way
// const fs = require('fs');
// const content = "In syncronous way";
// try {
//     fs.writeFileSync('data.txt', content);
//     console.log("File writed successfully");
// }
// catch (err) {
//     console.log(err.message);
// }

// Using fs/promises
// const fs = require('fs/promises');
// const content = 'center';
// async function writeData() {
//     try {
//         await fs.writeFile('data.txt', content, { flag: 'a+' }); // By using a+ flag, we can append to the file, previous data will not be losted or erased
//         console.log("File writed successfully");
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }
// writeData();

// Appending to a file

// const fs = require('fs');
// const content = 'Hello';
// fs.appendFile('data.txt', content, (err, data) => {
//     if (err) {
//         console.log(err.message);
//     }
//     console.log("Success");
// })

// Alternate using fs/promises
const fs = require('fs/promises');
const content = 'Using fs/promises';
async function appendFile() {
    try {
        await fs.appendFile('data.txt', content);
        console.log('Success');
    }
    catch (err) {
        console.log(err)
    }
}
appendFile();