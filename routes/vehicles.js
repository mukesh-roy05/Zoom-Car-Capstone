const express = require("express");
const Vehicle = require("../models/Vehicle");

const router = express.Router();

// Get all vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
