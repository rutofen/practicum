require('dotenv').config()
const express = require('express')
const app = express()
const trackingRouter = require('./routers/tracking')
const { create_tracking_table } = require('./core/config_db')

app.use(express.json())
create_tracking_table()

const express = require('express');
const driversRouter = require('./routers/drivers'); 
const { create_tracking_table } = require('./core/config_db');
const authRouter = require('./routers/auth'); 

app.use(express.json());
create_tracking_table();

app.use('/drivers', driversRouter);
app.use('/auth', authRouter);
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
module.exports = app
