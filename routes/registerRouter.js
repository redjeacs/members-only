const { Router } = require("express");
const registerController = require("../controllers/registerController");

const registerRouter = Router();

registerRouter.get("/", registerController.registerFormGet);

registerRouter.post("/", registerController.registerFormPost);

module.exports = registerRouter;
