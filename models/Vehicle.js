const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
