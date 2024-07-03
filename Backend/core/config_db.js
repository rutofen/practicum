const {db_name,db_user,db_pass,db_host,db_port} = require('../config')

const pg = require('pg')
const { Pool, Client } = pg
 
const pool = new Pool({
  user: db_user,
  password: db_pass,
  host: db_host,
  port: db_port,
  database: db_name,
})



module.exports = pool;
 




// const { db_name, db_user, db_pass, db_host, db_port } = require('../config');
// const { Client } = require('pg');
// require('dotenv').config();

// const client = new Client({
//   user: db_user,
//   password: db_pass,
//   host: db_host,
//   port: db_port,
//   database: db_name,
// });

// module.exports = client;