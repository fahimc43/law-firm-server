const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// Router
const serviceRoute = require("./routes/service.route");

app.use("/api/v1/service", serviceRoute);

app.get("/", (req, res) => {
  res.send("Route is working");
});

module.exports = app;
