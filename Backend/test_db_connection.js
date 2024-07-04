
const db = require('./core/config_db')

db.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to database:', err.stack)
    } else {
        console.log('Connected to database at:', res.rows[0].now)
    }
})
db.query('SELECT $1::text as message', ['Hello from PostgreSQL'], (err, res) => {
    if (err) {
        console.error('Error executing query:', err.stack)
    } else {
        console.log('Query result:', res.rows[0].message)
    }
})
