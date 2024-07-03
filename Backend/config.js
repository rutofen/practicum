require('dotenv').config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USERNAME;
const db_pass = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;

console.log('DB_NAME:', db_name);
console.log('DB_USERNAME:', db_user);
console.log('DB_PASSWORD:', db_pass);
console.log('DB_HOST:', db_host);
console.log('DB_PORT:', db_port);

module.exports = {
    db_name,
    db_user,
    db_pass,
    db_host,
    db_port
};
