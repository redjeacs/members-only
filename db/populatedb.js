require("dotenv").config();
const { Client } = require("pg");

const SQL = ``;

async function populate() {
  const client = new Client({
    connectionString: process.env.LOCAL_DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database successfully populated");
  } catch (err) {
    console.error("Error popluating database:", err);
  } finally {
    console.log("done");
  }
}

populate();
