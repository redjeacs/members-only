require("dotenv").config();
const { Client } = require("pg");

const userSQL = `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  fullname VARCHAR (255),
  username VARCHAR (255), 
  password VARCHAR (255),
  status VARCHAR (6)
);`;

const msgSQL = `CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  title VARCHAR (255), 
  timestamp DATE, 
  text VARCHAR (255)
);

INSERT INTO messages (title, timestamp, text) VALUES 
  ('', '', ''),
  ('', '', ''),
  ('', '', ''),
  ('', '', ''),
  ('', '', ''),
  ('', '', ''),
  ('', '', ''),
  ('', '', ''),
  ('', '', ''),
  ('', '', '');
`;

async function populate() {
  const client = new Client({
    connectionString: process.env.LOCAL_DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  try {
    await client.connect();
    await client.query(userSQL);
    await client.query(msgSQL);
    console.log("Database successfully populated");
  } catch (err) {
    console.error("Error popluating database:", err);
  } finally {
    await client.end();
    console.log("done");
  }
}

populate();
