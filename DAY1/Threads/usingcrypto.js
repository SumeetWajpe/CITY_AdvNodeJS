process.env.UV_THREADPOOL_SIZE = 8; // ?? os module .cpus()
const crypto = require("crypto");

const start = Date.now();

crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  console.log("1: ", Date.now() - start);
});

crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  console.log("2: ", Date.now() - start);
});

crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  console.log("3: ", Date.now() - start);
});

crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  console.log("4: ", Date.now() - start);
});

crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  console.log("5: ", Date.now() - start);
});

crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  console.log("6: ", Date.now() - start);
});

crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  console.log("7: ", Date.now() - start);
});

crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  console.log("8: ", Date.now() - start);
});
