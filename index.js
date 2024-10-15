const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config/config");
const app = require("./app");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MONGODB Connected...");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((error) => console.error("Couldn't Connect to MongoDB..."));
