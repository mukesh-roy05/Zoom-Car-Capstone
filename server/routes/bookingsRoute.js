const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51IYnC0SIR2AbPxU0EiMx1fTwzbZXLbkaOcbc2cXx49528d9TGkQVjUINJfUDAnQMVaBFfBDP5xtcHCkZG1n1V3E800U7qXFmGf"
);

router.post("/bookcar", async (req, res) => {
  const { token, paymentMethod } = req.body;

  // If the payment method is Stripe, we handle payment processing
  if (paymentMethod === "stripe") {
    try {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });

      const payment = await stripe.charges.create(
        {
          amount: req.body.totalAmount * 100, // Amount is in cents
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
        },
        {
          idempotencyKey: uuidv4(),
        }
      );

      if (payment) {
        req.body.transactionId = payment.source.id; // Store Stripe transaction ID
        const newBooking = new Booking(req.body);
        await newBooking.save();

        const car = await Car.findOne({ _id: req.body.car });
        car.bookedTimeSlots.push(req.body.bookedTimeSlots);
        await car.save();

        res.send("Your booking is successful with Stripe payment.");
      } else {
        return res.status(400).json({ message: "Payment failed" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Payment processing failed", error });
    }
  }
  // If the payment method is Cash, we skip payment processing
  else if (paymentMethod === "cash") {
    try {
      // No need to process payment, we just save the booking
      const newBooking = new Booking(req.body);
      await newBooking.save();

      const car = await Car.findOne({ _id: req.body.car });
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);
      await car.save();

      res.send("Your booking is successful with Cash payment.");
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Booking failed", error });
    }
  } else {
    return res.status(400).json({ message: "Invalid payment method" });
  }
});

// Get all bookings endpoint (no changes here)
router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car");
    res.send(bookings);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
