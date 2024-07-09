
const { db_name, db_user, db_pass, db_host, db_port } = require('../config');
const { Client, Pool } = require('pg');

const pool = new Pool({
  user: db_user,
  password: db_pass,
  host: db_host,
  port: db_port,
  database: db_name,
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


const createStatusTransportTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS statustransport (
       transport_status_id SERIAL PRIMARY KEY,
       status_id INTEGER REFERENCES status(status_id),
       update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       user_id INTEGER REFERENCES users(user_id)
    );
  `;
  try {
    await pool.query(query);
    console.log('StatusTransport table created or already exists');
  } catch (error) {
    console.error('Error checking/creating StatusTransport table', error);
  }
};

module.exports = {
  pool,
  createStatusTransportTable,
};
