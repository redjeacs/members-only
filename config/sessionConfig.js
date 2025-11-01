const { session } = require("passport");
const pool = require("../db/pool");
const pgStore = require("connect-pg-simple")(session);

module.exports = () =>
  session({
    store: new pgStore({
      pool: pool,
      tableName: "member_sessions",
      createTableIfMissing: true,
    }),
    secret: "cats",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  });
