require("dotenv").config();
let bodyParser = require("body-parser");
const { response } = require("express");
let express = require("express");
let app = express();
// let string = "Hello Express";
// app.get("/", (req, res) => {
//   res.send(string);
// });
//loger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time,
    });
  }
);

app.get("/:word/echo", (req, res) => {
  res.send({
    echo: req.params.word,
  });
});

app.get("/name", (req, res) => {
  res.send({
    name: `${req.query.first} ${req.query.last}`,
  });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/name", (req, res) => {
  res.send({
    name: `${req.body.first} ${req.body.last}`,
  });
});

//css
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
