const Booking = require("../models/Booking");

exports.getBookingServices = async () => {
  const services = await Booking.find({});
  return services;
};

exports.createBookingServices = async (data) => {
  const service = await Booking.create(data);
  return service;
};
