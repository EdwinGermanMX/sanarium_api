const pkg = require("../package.json");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const dataRoutes = require("./routes/data.routes");
const app = express();

//Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 8005);
app.set("json spaces", 4);

// Middlewares
const corsOptions = {
  origin: "https://sanarium-evemzbx3p-aaronflores11.vercel.app/"
};
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", userRoutes);
app.use("/api/data", dataRoutes);

// Welcome Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome Sannarium API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});

// Routes


module.exports = app;
