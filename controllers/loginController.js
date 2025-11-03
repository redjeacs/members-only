const { validationResult, matchedData } = require("express-validator");
const passport = require("passport");
const CustomNotFoundError = require("../views/partials/CustomNotFoundError");
const { loginValidation } = require("../middlewares/validation");

exports.loginFormGet = (req, res) => {
  res.render("login");
};

exports.loginFormPost = [
  loginValidation,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).render("login", { errors: errors.array() });
    try {
      const data = matchedData(req);
      if (!data) throw new CustomNotFoundError("login information is invalid!");
      passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
      })(req, res, next);
    } catch (err) {
      return next(err);
    }
  },
];
