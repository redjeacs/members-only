require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const passport = require("passport");
const sessionConfig = require("./config/sessionConfig");

const PORT = process.env.PORT || 8000;

const indexRouter = require("./routes/indexRouter");
const loginRouter = require("./routes/loginRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Session

app.use(sessionConfig());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.user);
  res.locals.currentUser = req.user;
  next();
});

require("./config/passportConfig");

//Routes

app.use("/", indexRouter);
app.use("/login", loginRouter);

// Server

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Express app listening on port ${PORT}`);
});
