const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hi there uwu");
});

app.listen(process.env.PORT || 8080);
console.log("uwu server running");
