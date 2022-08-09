const Router = require("express");
const router = Router();

const dataController = require("../controllers/data.controller");
const verifyToken = require("../controllers/validate-token.controller");


/*Verify Token */
router.get("/verifyToken", verifyToken);
/*Quitar esta ruta al final de las pruebas */
router.get("/showData", dataController.getValues);
module.exports = router;
