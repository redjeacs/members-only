const passport = require("passport");

exports.loginFormGet = (req, res) => {
  res.render("login");
};

exports.loginFormPost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
});
