const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();

app.use(favicon(path.join(__dirname, "favicon.ico")));

app.get("/", (req, res) => {
  res.send("hi there uwu");
});

app.listen(process.env.PORT || 8080);
console.log("uwu server running");
