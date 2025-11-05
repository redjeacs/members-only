const db = require("../db/queries");

exports.renderHomePage = async (req, res) => {
  const isMember = false;
  const data = await db.getAllMessages();
  res.render("index", { messages: data, isMember: isMember });
};

exports.memberAdd = async (req, res) => {
  await db.addMember(req.user.id);
  res.redirect("/");
};
