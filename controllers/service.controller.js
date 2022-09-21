const {
  getServiceServices,
  createServiceServices,
} = require("../services/service.services");

exports.getServices = async (req, res, next) => {
  try {
    const result = await getServiceServices();

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

exports.createService = async (req, res, next) => {
  try {
    const result = await createServiceServices(req.body);

    res.status(200).json({
      status: "Success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};
