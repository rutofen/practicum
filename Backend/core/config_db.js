const { Pool } = require('pg');

const poolusers = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'transport-management',
  password: 'esti',
  port: 5432,
});

module.exports = { pool };

const { Pool } = require('pg');

const pool  = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'drivers', 
  password: 'rivka', 
  port: 5432,
  ssl:false
});

async function create_tracking_table() {
const pool = new Pool({
  user: db_user,
  password: db_pass,
  host: db_host,
  port: db_port,
  database: db_name,
  ssl: false
})

async function create_tracking_table() {

  const checkTableQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'driver'
    );
      WHERE table_schema = 'public'
      AND table_name = 'tracking'
    );
  `

  const createTableQuery = `
    CREATE TABLE tracking (
      Track_id SERIAL PRIMARY KEY,
      Location_lat DOUBLE PRECISION NOT NULL,
      Location_lng DOUBLE PRECISION NOT NULL,
      Time TIMESTAMP NOT NULL,
      Transport_id INTEGER
    );
  `

  let client;
  try {

    client = await pool.connect()
    const result = await client.query(checkTableQuery)
    const tableExists = result.rows[0].exists;
    if (!tableExists) {
      await client.query(createTableQuery)
      return 'Created tracking table successfully'
    } else {
      return 'Tracking table already exists'
    }
  } catch (err) {
    return 'Error checking/creating tracking table'
  } finally {
    if (client) {
      client.release()
    }
}}

const createTableIfNotExists = async (tableName, columnsDefinition) => {
  const query = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      ${columnsDefinition}
    )
  `;

  const createTableQuery = `
    CREATE TABLE driver (
      Id SERIAL PRIMARY KEY,
      Name VARCHAR(100) NOT NULL,
      WorkTime INTEGER NOT NULL
    );
  `;
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(checkTableQuery);
    const tableExists = result.rows[0].exists;

    if (!tableExists) {
      await client.query(createTableQuery);
      console.log('Created driver table successfully');
    } else {
      console.log('Driver table already exists');
    }
  } catch (err) {
    console.error('Error checking/creating driver table', err);
    console.error('Error creating table:', error.message);

    throw error;
  } 

  finally {
    if (client) {
      client.release();
    }
    await pool.query(query);
    console.log('Table created or already exists');
  }
}
module.exports = {
  pool,
  poolusers,
  create_tracking_table,
};
  createTableIfNotExists
}

