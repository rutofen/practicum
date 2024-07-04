require('dotenv').config()
const express = require('express')
const app = express()
const trackingRouter = require('./routers/tracking')
const { checkDatabaseConnection } = require('./core/config_db')

app.use(express.json())
checkDatabaseConnection()

app.use('/tracking', trackingRouter)

app.get('/', (req, res) => {
  res.send('Hello Transports!')
})

module.exports = app

