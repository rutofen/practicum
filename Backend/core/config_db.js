const { Pool } = require('pg');
const { db_name, db_user, db_pass, db_host, db_port } = require('../config');
require('dotenv').config();

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
  user: process.env.DB_USERNAME || db_user,
  password: process.env.DB_PASSWORD || db_pass,
  host: process.env.DB_HOST || db_host,
  port: process.env.DB_PORT || db_port,
  database: process.env.DB_NAME || db_name,
});

async function create_users_table() {
  const checkTableQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
<<<<<<< HEAD
      WHERE table_name = 'driver'
    );
      WHERE table_schema = 'public'
      AND table_name = 'tracking'
=======
      WHERE table_name = 'users'
>>>>>>> 72835cb1cf56911b842c69a4b8705aa751ee0892
    );
  `;

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      phone VARCHAR(10) NOT NULL,
      email VARCHAR(30) NOT NULL,
      password_information TEXT
    );
  `;

  let client;
  try {
    client = await pool.connect();
    const result = await client.query(checkTableQuery);
    const tableExists = result.rows[0].exists;

    if (!tableExists) {
      await client.query(createTableQuery);
    } else {
    }
  } catch (err) {
    console.error('Error checking/creating users table', err);
  } finally {
    if (client) {
      client.release();
    }
  }
}

const createTableIfNotExists = async (tableName, columnsDefinition) => {
  const query = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      ${columnsDefinition}
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
  
  try {
    await pool.query(query);
  } catch (error) {
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

};

module.exports = {
  pool,
  create_users_table,
  createTableIfNotExists,
};
