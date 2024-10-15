const express = require("express");
const router = require("./routes/routes");
const app = express();

// setup router

app.use("/", router);
module.exports = app;
