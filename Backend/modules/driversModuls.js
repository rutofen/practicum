const { Pool } = require('pg');

const PullFromSQL  = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'drivers', 
  password: 'rivka', 
  port: 5432,
});

async function query(text, params) {
  const start = Date.now();
  const res = await PullFromSQL.query(text, params);
  const duration = Date.now() - start;
  console.log('Executed query:', { text, duration, rows: res.rowCount });
  return res.rowCount;
}

async function createDriver(name, workTime) {
  const queryText = 'INSERT INTO driver (name, worktime) VALUES ($1, $2) RETURNING *';
  const values = [name, workTime];
  const result = await query(queryText, values);
  return result.rows[0];
}

async function getDriverById(id) {
  const queryText = 'SELECT * FROM driver WHERE id = $1';
  const result = await query(queryText, [id]);
  return result.rows[0];
}

async function updateDriver(id, name, workTime) {
  const queryText = 'UPDATE driver SET name = $2, worktime = $3 WHERE id = $1 RETURNING *';
  const values = [id, name, workTime];
  const result = await query(queryText, values);
  return result.rows[0];
}

async function deleteDriver(id) {
  const queryText = 'DELETE FROM driver WHERE id = $1';
  await query(queryText, [id]);
  return result.rows[0].id;
}

async function getAllDrivers() {
  const queryText = 'SELECT * FROM driver';
  const result = await query(queryText, []);
  return result.rows;
}
module.exports = {
  createDriver,
  getDriverById,
  updateDriver,
  deleteDriver,
  getAllDrivers,
};
