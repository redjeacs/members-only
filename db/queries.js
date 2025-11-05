const pool = require("./pool");

exports.getUserFromUsername = async (username) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
};

exports.getUserFromId = async (userId) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
    userId,
  ]);
  return rows[0];
};

exports.createUser = async (fullname, username, password) => {
  await pool.query(
    "INSERT INTO users (fullname, username, password, status) VALUES ($1, $2, $3, $4)",
    [fullname, username, password, "user"]
  );
};

exports.getAllMessages = async (req, res) => {
  const { rows } = await pool.query(
    "SELECT *, TO_CHAR(timestamp, 'YYYY-MM-DD') AS formatted_date FROM users AS u JOIN messages AS m ON u.id = m.user_id;"
  );
  console.log(rows);
  return rows;
};

exports.createMessage = async (user_id, title, text) => {
  await pool.query(
    "INSERT INTO messages (user_id, title, text) VALUES ($1, $2, $3)",
    [user_id, title, text]
  );
};

exports.addMember = async (user_id) => {
  await pool.query(`UPDATE users SET status = $1 WHERE id = ${user_id}`, [
    "member",
  ]);
};

exports.deleteMessage = async (messageId) => {
  await pool.query("DELETE FROM messages WHERE id = $1", [messageId]);
};
