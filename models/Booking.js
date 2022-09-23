const mongoose = require("mongoose");

// Schema design
const bookingSchema = mongoose.Schema(
  {
    serviceItem: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    slot: {
      type: String,
      required: true,
      trim: true,
    },
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    clientEmail: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const collectionName = "bookings";

const Booking = mongoose.model("Booking", bookingSchema, collectionName);

module.exports = Booking;
