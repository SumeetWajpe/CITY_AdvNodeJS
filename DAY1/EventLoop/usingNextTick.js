const TIMEOUT_MS = 0;

console.log("Started");

setTimeout(() => {
  console.log(" -- Timeout 1 !");
}, TIMEOUT_MS);
setImmediate(() => console.log("-- Immediate 1"));

setTimeout(() => {
  setTimeout(() => console.log("--- Timeout 3"), TIMEOUT_MS);
  setImmediate(() => console.log("--- Immdediate 3"));
process.nextTick(() => console.log("-- Next Tick 3"));

  console.log("-- Timeout 2");
}, TIMEOUT_MS);

process.nextTick(() => console.log("-- Next Tick 1"));

console.log("Ended");
