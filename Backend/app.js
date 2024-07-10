require('dotenv').config()
const express = require('express')
const app = express()
const trackingRouter = require('./routers/tracking')
const { create_tracking_table } = require('./core/config_db')

app.use(express.json())
create_tracking_table()

app.use('/tracking', trackingRouter)

app.get('/', (req, res) => {
  res.send('Hello Transports!')
})

module.exports = app