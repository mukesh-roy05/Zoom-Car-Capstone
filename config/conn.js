const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect("mongodb+srv://mroy:Belcome1@cluster0.avvfx.mongodb.net/zoomcar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
