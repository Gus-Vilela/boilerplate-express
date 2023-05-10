require("dotenv").config();
const { response } = require("express");
let express = require("express");
let app = express();
// let string = "Hello Express";
// app.get("/", (req, res) => {
//   res.send(string);
// });

app.use("/public", express.static(__dirname + "/public"));

absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let response = "";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }
  res.json({ message: response });
});

// console.log("Hello World");

module.exports = app;
