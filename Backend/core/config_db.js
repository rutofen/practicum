// const {db_name,db_user,db_pass,db_host,db_port} = require('../config')

// const pg = require('pg')
// const { Pool, Client } = pg

// const pool = new Pool({
//   user: db_user,
//   password: db_pass,
//   host: db_host,
//   port: db_port,
//   database: db_name,
// })



// module.exports = pool;




const { Pool } = require('pg')
const { db_name, db_user, db_pass, db_host, db_port } = require('../config')

const pool = new Pool({
  user: db_user,
  password: db_pass,
  host: db_host,
  port: db_port,
  database: db_name,
  ssl: false
})

async function create_transports_table() {
  const checkTableQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'transports'
    );
  `;

  const createTableQuery = `
    CREATE TABLE tracking (
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
  `
  let client;
  try {
    client = await pool.connect()
    const result = await client.query(checkTableQuery)
    const tableExists = result.rows[0].exists

    if (!tableExists) {
      await client.query(createTableQuery)
      console.log('Created tracking table successfully')
    } else {
      console.log('Transports table already exists')
    }
  } catch (err) {
    console.error('Error checking/creating transports table', err)
  } finally {
    if (client) {
      client.release()
    }
  }
}
module.exports = {
  pool,
  create_transports_table,
}
