const {db_name,db_user,db_pass,db_host,db_port} = require('../config')

const pg = require('pg')
const { Pool, Client } = pg
 
// const pool = new Pool({
//   user: 'dbuser',
//   password: 'secretpassword',
//   host: 'database.server.com',
//   port: 3211,
//   database: 'mydb',
// })
 
const client = new Client({
  user: db_name,
  password: db_pass,
  host: db_host,
  port: db_port,
  database: db_user,
})

module.exports = client
 
