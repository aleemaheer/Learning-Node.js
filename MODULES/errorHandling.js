// ERROR HANDLING IN NODE JS

// Using async await
const printNumbers = () => {
	for (let i = 0; i < 10; i++) {
		console.log(i);
	}
};

// async function example() {
//     try {
//         await printNumbers();
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }

// example();

// Using .then
// printNumbers()
// 	.then(console.log("hi"))
// 	.then(console.log("hi"))
// 	.catch((err) => console.error(err));

// try {
//     printNumbers();
//     console.log('success');
// }
// catch (err) {
//     console.log(err.message);
// }

