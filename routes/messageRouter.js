const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", messageController.messageFormGet);
messageRouter.post("/", messageController.messageFormPost);

module.exports = messageRouter;
