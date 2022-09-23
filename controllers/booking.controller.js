const Booking = require("../models/Booking");
const {
  getBookingServices,
  createBookingServices,
} = require("../services/booking.services");

exports.getBookings = async (req, res, next) => {
  try {
    const result = await getBookingServices();

    res.status(200).json({
      status: "Success",
      length: result.length,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Can't get the data ",
      error: error.message,
    });
  }
};

exports.createBooking = async (req, res, next) => {
  try {
    // const result = await createBookingServices(req.body);
    const data = req.body;
    const query = {
      serviceItem: data.serviceItem,
      date: data.date,
      clientEmail: data.clientEmail,
    };
    const exists = await Booking.findOne(query);
    if (exists) {
      return res.send({
        status: "fail",
        message: " Data is not inserted ",
        booking: exists,
      });
    } else {
      const service = await Booking.create(data);
      res.status(200).json({
        status: "Success",
        message: "Data inserted successfully",
        data: service,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};
