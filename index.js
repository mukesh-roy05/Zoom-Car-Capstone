const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config/config");

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MONGO DB Connected"))
  .catch((error) => console.error("Couldn't Connect mongo DB"));


  