require("dotenv").config();
const express = require("express");

const app = express(); // express ability given to app

const port = 5000; // port where server can listen

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is heading</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
