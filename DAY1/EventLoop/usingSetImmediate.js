const TIMEOUT_MS = 0;

console.log("Started");

setImmediate(() => console.log("-- Immediate 1"));

setTimeout(() => {
  console.log(" -- Timeout 1 !");
}, TIMEOUT_MS);

setTimeout(() => {
  setTimeout(() => console.log("--- Timeout 3"), TIMEOUT_MS);
  setImmediate(() => console.log("--- Immdediate 3"));

  console.log("-- Timeout 2");
}, TIMEOUT_MS);

console.log("Ended");
