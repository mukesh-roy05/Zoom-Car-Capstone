const express = require("express");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

// middlewares

//Parse the Cookie
app.use(cookieParser());

// parse incoming request with json payload
app.use(express.json());

//set up routes
app.use("/auth", authRouter);
module.exports = app;
