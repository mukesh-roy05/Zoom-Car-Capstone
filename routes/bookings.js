const express = require("express");
const Booking = require("../models/Booking");
const Vehicle = require("../models/Vehicle");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

// Create a new booking with payment
router.post("/", async (req, res) => {
  const { userId, vehicleId, startDate, endDate, pickupLocation } = req.body;
  const vehicle = await Vehicle.findById(vehicleId);
  if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

  const totalPrice =
    vehicle.price *
    ((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: "usd",
    });

    const newBooking = new Booking({
      userId,
      vehicleId,
      startDate,
      endDate,
      pickupLocation,
    });
    await newBooking.save();

    res.status(201).json({
      message: "Booking created",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all bookings for a user
router.get("/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate(
      "vehicleId"
    );
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
