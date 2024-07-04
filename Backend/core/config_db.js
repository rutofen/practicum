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
  const checkTableQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'driver'
    );
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
  } finally {
    if (client) {
      client.release();
    }
  }
}

module.exports = {
  pool,
  create_tracking_table,
};
