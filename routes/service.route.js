const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/service.controller");

router
  .route("/")
  .get(serviceController.getServices)
  .post(serviceController.createService);

module.exports = router;
