const { Pool } = require('pg');
const { db_name, db_user, db_pass, db_host, db_port } = require('../config');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USERNAME|| db_user,
  password: process.env.DB_PASSWORD|| db_pass,
  host: process.env.DB_HOST|| db_host,
  port: process.env.DB_PORT|| db_port,
  database: process.env.DB_NAME|| db_name,
});

// async function create_users_table() {
//   const checkTableQuery = `
//     SELECT EXISTS (
//       SELECT 1
//       FROM information_schema.tables
//       WHERE table_name = 'users'
//     );
//   `;

//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS users (
//       user_id SERIAL PRIMARY KEY,
//       name VARCHAR(30) NOT NULL,
//       phone VARCHAR(10) NOT NULL,
//       email VARCHAR(30) NOT NULL,
//       password_information TEXT
//     );
//   `;

//   let client;
//   try {
//     client = await pool.connect();
//     const result = await client.query(checkTableQuery);
//     const tableExists = result.rows[0].exists;

//     if (!tableExists) {
//       await client.query(createTableQuery);
//     } else {
//     }
//   } catch (err) {
//     console.error('Error checking/creating users table', err);
//   } finally {
//     if (client) {
//       client.release();
//     }
//   }
// }

// const createTableIfNotExists = async (tableName, columnsDefinition) => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS ${tableName} (
//       ${columnsDefinition}
//     );
//   `;
  
//   try {
//     await pool.query(query);
//   } catch (error) {
//     console.error('Error creating table:', error.message);
//     throw error;
//   }
// };

module.exports = {
  pool
  // create_users_table,
  // createTableIfNotExists,
};
