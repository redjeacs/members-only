const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", indexController.renderHomePage);

module.exports = indexRouter;
