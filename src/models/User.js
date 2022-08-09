const mongoose = require("mongoose");

var acuariumSchema =  mongoose.Schema({
  acuariumId : Number
});

const userSchema = mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  acuariums:  [
    acuariumSchema
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
