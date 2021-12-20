const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('please turn off the motor!');
  setTimeout(()=>{
      console.log('please turn off the motor! Its a gentle reminder');
  }, 3000);
});

console.log("the script is running")
myEmitter.emit('Waterfull');
console.log("the script is still running")

