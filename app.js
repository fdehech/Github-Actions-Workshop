const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
