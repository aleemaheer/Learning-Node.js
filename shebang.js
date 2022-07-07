// const oranges = ["orange", "orange"];
// const apples = ["just one apple"];
// const teamMembers = ['John', 'Michael', 'Fin', 'Freddie'];
// oranges.forEach((fruit) => {
// 	console.count(fruit);
// });
// apples.forEach((fruit) => {
// 	console.count(fruit);
// });

// teamMembers.forEach((team) => {
// 	console.log(team);
// })

// for (const team of teamMembers) {
// 	console.log(team);
// }

// You can easily calculate how much time a function takes to run, using time() and timeEnd()


// const doSomething = () => console.log("test");
// const measureDoingSomething = () => {
// 	console.time("doSomething()");
// 	// do something, and measure the time it takes
// 	doSomething();
// 	console.timeEnd("doSomething()");
// };
// measureDoingSomething();

//console.log('\x1b[33m%s\x1b[0m', 'hi!');

// Measuring time in which a code runs 5 * 4 * 3 * 2
console.clear();

const findFactorial = () => {
	let num = 5, factorial = 1;
	for (let i = num; i >= 1; i--) {
		factorial = factorial * i;
	}
	console.log(`Factorial of ${num} is ${factorial}`);
}

function timeConsuming() {
	for (let i = 0; i < 10000; i++) {
		console.log(i);
	}
}
 
// Measuring execution time of function findFactorial()
const MeasureTime = () => {
	console.time("findFactorial()");
	findFactorial();
	timeConsuming();
	console.timeEnd("findFactorial()");
}
MeasureTime();

