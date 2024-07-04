const { Pool } = require('pg');
const { db_name, db_user, db_pass, db_host, db_port } = require('../config');

const pool = new Pool({
    user: db_user,
    host: db_host,
    database: db_name,
    password: db_pass,
    port: db_port,
});

module.exports = pool;
