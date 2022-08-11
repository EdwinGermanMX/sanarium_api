const app = require("./app");
require("./models/database");
require("./controllers/mqtt");

app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
