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
