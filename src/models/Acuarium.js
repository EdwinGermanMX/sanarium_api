const mongoose = require("mongoose");

var acuariumSchema =  mongoose.Schema({
    acuariumId : String,
    name: String
  });

  module.exports = mongoose.model("Acuarium", acuariumSchema);