require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const passport = require("passport");
const sessionConfig = require("./config/sessionConfig");

const PORT = process.env.PORT || 8000;

const indexRouter = require("./routes/indexRouter");
const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");
const logoutRouter = require("./routes/logoutRouter");
const messageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Session

app.use(sessionConfig());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  console.log(res.locals.currentUser);
  next();
});

require("./config/passportConfig");

//Routes

app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/message", messageRouter);

// Server

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Express app listening on port ${PORT}`);
});
