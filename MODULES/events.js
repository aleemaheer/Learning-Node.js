// NODE JS EVENTS MODULE

// const EventEmitter = require('events');

// const door = new EventEmitter();
// door.emit('slam');
// door.listenerCount('open');
// console.log(door.eventNames());
// console.log(door.getMaxListeners());
// door.listeners();
// door.on('open', () => {
//     console.log("Door was opened");
// })

const EventEmitter = require('events');

const ee = new EventEmitter();
ee.once('my-event', () => {
    console.log("Once");
})