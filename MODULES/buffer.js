// BUFFERS 

// const buf = Buffer.from('Hey!');
// console.log(buf[0]);
// console.log(buf[1]);
// console.log(buf[2]);
// console.log(buf.toString());
// console.log(buf.length);
// for (let item of buf) {
//     console.log(item);
// }

// const buf = Buffer.alloc(5);
// buf.write('Hello');
// console.log(buf.toString());

// Creating a slice, a slice is not a copy, when the buffer change the slice will also change
const buf = Buffer.from("Hey");
console.log(buf.subarray(0).toString());
const slice = buf.subarray(0, 3);
console.log(slice.toString());
// Note that when we change buffer, the slice will also change for example
buf[1] = 111;
console.log(slice.toString()); console.log(buf.toString());