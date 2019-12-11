const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(
  (date = (req, res, next) => {
    let hour = new Date().getHours;
    hour > 17 || hour < 8
      ? res.send("<h1> Our office is not open now</h1>")
      : next();
  })
);

app.use(express.static(__dirname + "/public"));

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000 ");
});
