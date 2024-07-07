const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function  create_pumps_and_status_table(){
  const queryText = `
    CREATE TABLE IF NOT EXISTS pumps (
      pump_id SERIAL PRIMARY KEY,
      pump_description TEXT
    )
  `;
  const queryText2 = `
    CREATE TABLE IF NOT EXISTS status (
      pump_id SERIAL PRIMARY KEY,
      pump_description TEXT
    )
  `;

  try {
    await pool.query(queryText);
    await pool.query(queryText2);
    console.log('Pumps and status table created successfully');
  } catch (error) {
    console.error('Error creating pumps or status table:', error.message);
    throw error;
  }
}

module.exports = {
  pool,
  create_pumps_and_status_table
};
