require('dotenv').config();
module.exports = {
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USERNAME,
    db_pass: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT
};

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USERNAME;
const db_pass = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;

module.exports = {
    db_name,
    db_user,
    db_pass,
    db_host,
    db_port
};
