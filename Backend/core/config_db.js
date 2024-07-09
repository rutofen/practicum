const { Pool } = require('pg')
const { db_name, db_user, db_pass, db_host, db_port } = require('../config')

const pool = new Pool({
  user: db_user,
  password: db_pass,
  host: db_host,
  port: db_port,
  database: db_name,
});

const createTableIfNotExists = async (tableName, columnsDefinition) => {
  const query = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      ${columnsDefinition}
    )
  `;
  try {
    await pool.query(query);
    console.log('Table created or already exists');
  } catch (error) {

    console.error('Error creating table:', error.message);

    throw error;
  }
}

module.exports = {
  pool,
  createTableIfNotExists
};


