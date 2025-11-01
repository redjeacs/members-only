const passport = requrie("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const db = require("../db/queries");

const verifyCallback = async (username, password, done) => {
  try {
    const user = await db.getUserFromUsername(username);

    if (!user) {
      return done(null, false, { message: "Incorrect username" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, { message: "Incorrect password" });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

passport.use(new LocalStrategy(verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeuser(async (id, done) => {
  try {
    const { rows } = await db.getUserFromId(id);
  } catch (err) {
    done(err);
  }
});
