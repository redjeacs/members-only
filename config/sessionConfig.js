const session = require("express-session");
const pool = require("../db/pool");

module.exports = () =>
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
    store: new (require("connect-pg-simple")(session))({
      pool: pool,
      tableName: "user_sessions",
      createTableIfMissing: true,
    }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  });
