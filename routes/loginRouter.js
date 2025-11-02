const { Router } = require("express");
const loginController = require("../controllers/loginController");

const loginRouter = Router();

loginRouter.get("/", loginController.loginFormGet);

loginRouter.post("/", loginController.loginFormPost);

module.exports = loginRouter;
