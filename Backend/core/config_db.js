const { Pool } = require('pg');

require('dotenv').config();

console.log(process.env.DB_USERNAME);

const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

async function create_users_table() {
  const checkTableQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'users'
    );
  `;
  
  const createTableQuery = `
   CREATE TABLE users_DB (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password_information TEXT
);
  `
  let client;
  try {
    client = await pool.connect()
    const result = await client.query(checkTableQuery)
    const tableExists = result.rows[0].exists

    if (!tableExists) {
      await client.query(createTableQuery)
      console.log('Created users table successfully')
    } else {
      console.log('Users table already exists')
    }
  } catch (err) {
    console.error('Error checking/creating users table', err)
  } finally {
    if (client) {
      client.release()
    }
  }
}
module.exports = {
  pool,
  create_users_table
}