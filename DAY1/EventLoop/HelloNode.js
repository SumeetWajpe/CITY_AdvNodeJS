console.log("Hello Node !");

setTimeout(() => {
  console.log("Printed after 0 seconds !");
}, 0);

const aPromise = new Promise((resolve, reject) => {
  resolve("Promise resolved !");
});

aPromise.then(msg => console.log(msg));

console.log("Program Ended !");
