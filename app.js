const express = require("express");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");

const app = express();

// middlewares

//Parse the Cookie
app.use(cookieParser());

// parse incoming request with json payload
app.use(express.json());

//set up routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/posts", postRouter);
module.exports = app;
