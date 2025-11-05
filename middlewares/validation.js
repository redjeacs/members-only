const { body } = require("express-validator");

const emptyMessage = "is required";
const length = "should be between 1 and 50 characters";
const textLength = "should not exceed 250 characters";

module.exports.registerValidation = [
  body("fullname")
    .trim()
    .notEmpty()
    .withMessage("Full name " + emptyMessage)
    .isLength({ min: 1, max: 50 })
    .withMessage("Full name " + length),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username " + emptyMessage)
    .isLength({ min: 1, max: 50 })
    .withMessage("Username " + length),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password " + emptyMessage)
    .isLength({ min: 1, max: 50 })
    .withMessage("Password " + length),
];

module.exports.loginValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username " + emptyMessage)
    .isLength({ min: 1, max: 50 })
    .withMessage("Username " + length),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password " + emptyMessage)
    .isLength({ min: 1, max: 50 })
    .withMessage("Password " + length),
];

module.exports.messageValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("title " + emptyMessage)
    .isLength({ min: 1, max: 50 })
    .withMessage("Title " + length),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("text " + emptyMessage)
    .isLength({ min: 1, max: 250 })
    .withMessage("text " + textLength),
];
