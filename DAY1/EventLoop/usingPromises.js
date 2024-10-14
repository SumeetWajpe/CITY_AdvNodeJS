const TIMEOUT_MS = 0;

console.log("Started");

setTimeout(() => {
  console.log("-- Timeout 1 !");
}, 0);

setImmediate(() => {
  console.log("-- Immediate 1");
  process.nextTick(() => console.log("-- Next Tick 2"));
});

process.nextTick(() => console.log("-- Next Tick 1"));

Promise.resolve().then(x => console.log("-- Promise 1"));

console.log("Ended");
