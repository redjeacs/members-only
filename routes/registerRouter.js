const { Router } = require("express");
const registerController = require("../controllers/registerController");

console.log(
  "registerController keys:",
  Object.keys(require("../controllers/registerController"))
);
console.log(
  "registerFormPost typeof:",
  typeof require("../controllers/registerController").registerFormPost
);

const registerRouter = Router();

registerRouter.get("/", registerController.registerFormGet);

registerRouter.post("/", registerController.registerFormPost);

module.exports = registerRouter;
