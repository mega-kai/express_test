import express from "express";

const app = express();

var favicon = require("serve-favicon");

app.use(favicon(__dirname + "/favicon.ico"));

// same with use but only deals with incoming get request of a certain path
app.get("/", (req, res) => {
  res.send(req.ip);
});

app.listen(8080);
