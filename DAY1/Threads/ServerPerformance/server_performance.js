process.env.UV_THREADPOOL_SIZE = 10;
const express = require("express");
const BCrypt = require("bcrypt");
const app = express();

app.get("/bcrypt", async (req, res) => {
  const hash = await BCrypt.hash("HashThisPassword", 8);
  res.send(hash);
});

app.listen(3000, () => console.log("Server running @ port 3000 !"));
