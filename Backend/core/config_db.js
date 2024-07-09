const { Pool } = require('pg')
const { db_name, db_user, db_pass, db_host, db_port } = require('../config')

const pool = new Pool({
  user: db_user,
  password: db_pass,
  host: db_host,
  port: db_port,
  database: db_name,
  ssl: false
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


const create_transports_table = async () => {
  const query = `
      CREATE TABLE IF NOT EXISTS transport (
         Id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
         Date DATE NOT NULL,
         Location_address TEXT NOT NULL,
         Location_lng FLOAT,
         Count_order INTEGER,
         Additional_quantity INTEGER,
         Status_id INTEGER REFERENCES Status_transport(Transport_status_id),
         Driver_id INTEGER REFERENCES Drivers(Id),
         Pump_id INTEGER REFERENCES Pumps(Id),
         Pipe_count INTEGER,
         Transfers TEXT
      );
  `;
  try {
    await pool.query(query);
    console.log('Transport table created or already exists');
  } catch (error) {
    console.error('Error checking/creating transport table', error);
  }
};

module.exports = {
  pool,
  create_transports_table,
}
