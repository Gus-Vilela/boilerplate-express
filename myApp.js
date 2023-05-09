let express = require("express");
let app = express();
let string = "Hello Express";
// app.get("/", (req, res) => {
//   res.send(string);
// });
absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});
console.log("Hello World");
module.exports = app;
