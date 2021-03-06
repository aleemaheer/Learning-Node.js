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
// const fs = require('fs/promises');
// const content = 'Using fs/promises';
// async function appendFile() {
//     try {
//         await fs.appendFile('data.txt', content);
//         console.log('Success');
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// appendFile();

// Create a new folder in NODE JS
// const fs = require('fs');
// const folderName = '/home/aleemaheer/learning_nodejs/HTTP/two';
// try {
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName);
//     }
// }
// catch (err) {
//     console.log(err.message);
// }

// Reading the content of a directory
// const fs = require('fs');
// const folderName = '/home/aleemaheer/learning_nodejs/HTTP';
// const path = fs.readdirSync(folderName);
// console.log(path);

// Getting the full path
// const fs = require('fs');
// const path = require('path');
// const folderName = '/home/aleemaheer/learning_nodejs/HTTP';
// const items = fs.readdirSync(folderName);
// items.forEach(item => {
//     console.log(path.join(folderName, item));
// })
// Alternate using map();
// const fullPath = (items.map(item => {
//     return path.join(folderName, item);
// }));
// console.log(fullPath);

// You can also filter the results to only return the files, and exclude the folders
// const fs = require("fs");
// const path = require("path");
// const folderPath = "/home/aleemaheer/learning_nodejs/HTTP";
// const fileName = "/home/aleemaheer/learning_nodejs/HTTP";
// const isFile = (fileName) => {
// 	return fs.lstatSync(fileName).isFile();
// };

// const filteredFile = fs
// 	.readdirSync(folderPath)
// 	.map((fileName) => {
// 		return path.join(folderPath, fileName);
// 	})
// 	.filter(isFile);
// console.log(filteredFile);

// Renaming a file in NODE JS
// const fs = require('fs');
// fs.rename('/home/aleemaheer/learning_nodejs/HTTP/test', '/home/aleemaheer/learning_nodejs/HTTP/testing', (err) => {
//     if (err) {
//         console.log(err.message);
//     }
//     console.log('Success');
// })
// Using Syncronous way
// const fs = require('fs');
// try {
//     fs.renameSync('/home/aleemaheer/learning_nodejs/HTTP/testing', '/home/aleemaheer/learning_nodejs/HTTP/test');
//     console.log("Success");
// }
// catch (err) {
//     console.log(err.message);
// }
// Using fs/promises
// const fs = require('fs/promises');
// async function renameDirectory() {
//     try {
//         await fs.rename('/home/aleemaheer/learning_nodejs/HTTP/test', '/home/aleemaheer/learning_nodejs/HTTP/testing');
//         console.log('Success');
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// renameDirectory();

// Removing a folder
// const fs = require('fs');
// const dir = '/home/aleemaheer/learning_nodejs/HTTP/testing'
// fs.rmdir(dir, { recursive: true }, err => {
//     if (err) {
//         console.log(err.message);
//     }
//     console.log(`${dir} is removed`);
// })

// NOTE: In Node v16.x the option recursive is deprecated for fs.rmdir of callback API,
// instead use fs.rm to delete folders that have content in them:

// Or we can also use fs-extra module, which is very popular and well-maintained
// const fs = require('fs-extra');
// const dir = '/home/aleemaheer/learning_nodejs/HTTP/one';
// fs.remove(dir, err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(dir + ' is removed');
// });
// Alternate using it with promise
// const fs = require('fs-extra');
// const dir = '/home/aleemaheer/learning_nodejs/HTTP/one';
// fs.remove(dir)
// .then(() => {
//     console.log("Successfully removed " + dir);
// })
// .catch(err => {
//     console.log(err.message);
// })
// Or use with async await
const fs = require('fs-extra');
const dir = '/home/aleemaheer/learning_nodejs/HTTP/one';
async function example(dir) {
    try {
        await fs.remove(dir);
        console.log("Success");
    }
    catch (err) {
        console.log(err.message);
    }
}
example(dir);