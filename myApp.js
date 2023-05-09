let express = require("express");
let app = express();
let string = "Hello Express";
app.get("/", (req, res) => {
  res.send(string);
});
console.log("Hello World");
