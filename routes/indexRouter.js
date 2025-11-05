const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.renderHomePage);

indexRouter.get("/member", indexController.memberAdd);

module.exports = indexRouter;
