const Data = require("../models/Data");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
    getValues: async function (req, res) {
        var { acuariumId } = req.params;
        console.log(acuariumId)
        const data = await Data.find({acuariumId : acuariumId}).sort("-date");
        try {
          return res.status(200).json({ data });
        } catch (error) {
          res.status(400).json({ error });
        }
      },
};