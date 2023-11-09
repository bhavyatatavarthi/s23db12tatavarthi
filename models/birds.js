const mongoose = require("mongoose");

const birdsSchema = mongoose.Schema({
Name: String,
  color: String,
  Age: Number
});

module.exports = mongoose.model("birds", birdsSchema);