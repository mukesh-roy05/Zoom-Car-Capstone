const express = require("express");
const mongoose = require("./db"); // Import the mongoose instance
const { PORT } = require("./utils/config");
const app = express();

const port = PORT || 5000;

// Ensure the connection is established before starting the server
mongoose.connection.on("open", () => {
  app.get("/", (req, res) => res.send("Hello World!"));

  app.listen(port, () => {
    console.log(`NODE JS Server Started on Port ${port}!`);
  });
});

// Handle connection errors
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
