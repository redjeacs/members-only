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
    "SELECT *, TO_CHAR(timestamp, 'YYYY-MM-DD') AS formatted_date FROM messages JOIN users ON user_id = users.id;"
  );
  return rows;
};
