const { Router } = require("express");
const passport = require("passport");
const loginRouter = Router();
const loginController = require("../controllers/loginController");

loginRouter.get("/", loginController.loginFormGet);

loginRouter.post("/", loginController.loginFormPost);
