const Service = require("../models/Service");

exports.getServiceServices = async () => {
  const services = await Service.find({});
  return services;
};

exports.createServiceServices = async (data) => {
  const service = await Service.create(data);
  return service;
};
