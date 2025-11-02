const bcrypt = require("bcryptjs");
const pool = require("../db/pool");
const db = require("../db/queries");
const { validationResult, matchedData } = require("express-validator");
const { registerValidation } = require("../middlewares/validation");
const CustomNotFoundError = require("../views/partials/CustomNotFoundError");

exports.registerFormGet = (req, res) => {
  res.render("register");
};

exports.registerFormPost = [
  registerValidation,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("register", { errors: errors.array() });
    }
    try {
      const data = matchedData(req);
      if (!data)
        throw new CustomNotFoundError("provided user information is invalid");
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      await db.createUser(req.body.fullname, req.body.username, hashedPassword);
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  },
];
