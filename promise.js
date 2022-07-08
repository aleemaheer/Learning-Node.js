// Resolving an array
// const p = Promise.resolve([1,2,3]);

// p.then(function (v) {
//     console.log(v[0]);
// })

// const original = Promise.resolve(33);
// const cast = Promise.resolve(original);
// cast.then(function (value) {
// 	console.log("value: " + value);
// });
// console.log("original === cast ? " + (original === cast));

// const flag = false;

// Promise.resolve(flag).then(
// 	function (value) {
// 		console.log(value);
// 	},
// 	function () {
// 		console.log("Not called");
// 	}
// );

// process.nextTick(() => {
// 	console.log("End");
// });

// const myFunction = () => {
// 	console.log("function");
// };

// setTimeout(myFunction, 1000);

// const id = setInterval(() => {
// 	console.log("Interval");
// }, 2000);

// clearInterval(id);

// //
// const interval = setInterval(() => {
// 	if (App.somethingIWait === "arrived") {
// 		clearInterval(interval);
// 	}
// 	// otherwise do things
// }, 100);
/*

let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const wordDone = "Work done";
        resolve(wordDone);
    }
    else {
        const why = "Not done work";
        reject(why);
    }
})

const checkIfDone = () => {
    isItDoneYet
    .then(ok => {
        console.log(ok);
    })
    .catch(err => {
        console.log(err.message);
    })
}

checkIfDone();
*/
// const p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a != 2) {
//         message = "Success";
//         resolve(message);
//     }
//     else {
//         message = "Fails";
//         resolve(message);
//     }
// })

// p.then(message => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })

const videoOne = new Promise((resolve, reject) => {
    reject("Video one recorded");
});
const videoTwo = new Promise((resolve, reject) => {
    resolve("Video two recorded");
})
const videoThree = new Promise((resolve, reject) => {
    resolve("Video three recorded");
})

Promise.all([
    videoOne,
    videoTwo,
    videoThree
]).then((messages) => {
    console.log(messages);
}).catch((messages) => {
    console.log(messages);
})

Promise.race([
    videoOne,
    videoTwo,
    videoThree
]).then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
})