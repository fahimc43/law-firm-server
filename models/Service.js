const mongoose = require("mongoose");

// Schema design
const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide s name"],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    slots: {
      type: [String],
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const collectionName = "services";

const Service = mongoose.model("Service", serviceSchema, collectionName);

module.exports = Service;
