const mongoose = require("mongoose");

var acuariumSchema =  mongoose.Schema({
    acuariumId : Number,
    name: String
  });

  module.exports = mongoose.model("Acuarium", acuariumSchema);