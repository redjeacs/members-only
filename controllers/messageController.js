const { validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");
const { messageValidation } = require("../middlewares/validation");
const CustomNotFoundError = require("../views/partials/CustomNotFoundError");

exports.messageFormGet = (req, res) => {
  res.render("newMessage");
};

exports.messageFormPost = [
  messageValidation,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("newMessage", { errors: errors.array() });
    }
    try {
      const { title, text } = matchedData(req);
      if (!title || !text)
        throw new CustomNotFoundError("your message is invalid!");
      await db.createMessage(req.user.id, title, text);
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  },
];

exports.messageDelete = async (req, res) => {
  messageId = req.params.id;
  console.log(messageId);
  await db.deleteMessage(messageId);
  res.redirect("/");
};
