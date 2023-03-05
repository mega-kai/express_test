import express from "express";

const app = express();
let x = 0;

// used to mount a middle ware at a certain path
app.use("/about", (req, res, next) => {
  x++;
  console.log(`this is the ${x} times of receiving an request`);
  next();
});

// same with use but only deals with incoming get request of a certain path
app.get("/", (req, res) => {
  res.send("uwu hi there");
});

app.listen(8080);
