const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  acuariumId: {
    type: String,
  },
  temperature: {
    type: String,
  },
  tds: {
    type: String,
  },
  ph: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Data", dataSchema);
