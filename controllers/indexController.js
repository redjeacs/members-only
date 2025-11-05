const db = require("../db/queries");

exports.renderHomePage = async (req, res) => {
  const data = await db.getAllMessages();
  res.render("index", { messages: data });
};
