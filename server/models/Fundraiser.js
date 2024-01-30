// FundRaiser.js

const mongoose = require("mongoose");

const FundRaiserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  fund: { type: String, required: true },
});

const FundRaiser = mongoose.model("FundRaiser", FundRaiserSchema);

module.exports = FundRaiser;
