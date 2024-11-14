// import mongoose module

const mongoose = require("mongoose");
const { MONGODB_URL } = require("./utils/config");

// connect to the database
mongoose
  // .connect(MONGODB_URL)
  .connect("mongodb+srv://mroy:Belcome1@cluster0.avvfx.mongodb.net/zoomcar")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.error("Could not connect to MongoDB..."));

module.exports = mongoose;
