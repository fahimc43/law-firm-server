const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking.controller");

router
  .route("/")
  .get(bookingController.getBookings)
  .post(bookingController.createBooking);

module.exports = router;
