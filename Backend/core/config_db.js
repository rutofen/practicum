//core/config_db.js

const { Pool } = require('pg')
const { db_name, db_user, db_pass, db_host, db_port } = require('../config')

const pool = new Pool({
  user: db_user,
  password: db_pass,
  host: db_host,
  port: db_port,
  database: db_name,
})

async function checkDatabaseConnection() {
  try {
    const client = await pool.connect()
    const res = await client.query('SELECT NOW()')
    console.log('Connected to PostgreSQL database at:', res.rows[0].now)
    client.release()
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error)
  }

}

module.exports = { pool, checkDatabaseConnection }
