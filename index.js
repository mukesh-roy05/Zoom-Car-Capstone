const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./utils/config");
const app = require("./app");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MONGODB Connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Couldn't Connect to MongoDB..."));
