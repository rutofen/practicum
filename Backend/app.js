require('dotenv').config()
const express = require('express')
const app = express()
const trackingRouter = require('./routers/tracking')
const { create_tracking_table } = require('./core/config_db')

app.use(express.json())
create_tracking_table()

const express = require('express');
const bodyParser = require('body-parser');
const pumpRouter = require('../Backend/routers/pump');
const statusRouter = require('../Backend/routers/status');
const transport_router = require('./routers/transport');

const { createTableIfNotExists } = require('./core/config_db');

createTableIfNotExists('status', 'status_id SERIAL PRIMARY KEY, description TEXT');
createTableIfNotExists('pump', 'pump_id SERIAL PRIMARY KEY, description TEXT');

require('dotenv').config();

app.use(bodyParser.json());
app.use('/api', pumpRouter);
app.use('/api', statusRouter);
app.use('/api', transport_router);
app.use('/tracking', trackingRouter)

app.get('/', (req, res) => {
  res.send('Hello Transports!')
})

module.exports = app