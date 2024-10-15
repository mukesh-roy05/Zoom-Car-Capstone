const express = require("express");
const authRouter = require("./routes/authRoutes");
const app = express();

// middlewares
// parse incoming request with json payload
app.use(express.json());

//set up routes
app.use("/auth", authRouter);
module.exports = app;
