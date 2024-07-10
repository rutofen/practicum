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

async function create_tracking_table() {

  const checkTableQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
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
  }
}

module.exports = {
  pool,
  create_tracking_table,
}
