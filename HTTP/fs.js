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

const fs = require('fs/promises');

async function fileStat() {
    try {
        const stats = await fs.stat('data.txt', 'r');
        console.log(stats.isFile()); // true
        stats.isDirectory(); // false
        stats.isSymbolicLink(); // false
        console.log("Size: ", stats.size);
    }
    catch (err) {
        console.log(err);
    }
}
fileStat();