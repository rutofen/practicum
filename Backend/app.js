require('dotenv').config();
const express = require('express');
const app = express();
const trackingRouter = require('./routers/tracking');
const routesRouter = require('./routers/routes');
const bodyParser = require('body-parser');
const pumpRouter = require('../Backend/routers/pump');
const statusRouter = require('../Backend/routers/status');
const transport_router = require('./routers/transport');
const { create_tracking_table } = require('./core/config_db')

create_tracking_table()
const { createTablesFromJson } = require('./core/Init_db');

createTablesFromJson();

const { createTableIfNotExists } = require('./core/config_db');

createTableIfNotExists('routes', 'route_id SERIAL PRIMARY KEY, description TEXT');

app.use(express.json());

app.use(bodyParser.json());
app.use('/api', pumpRouter);
app.use('/api', statusRouter);
app.use('/api', routesRouter);
app.use('/api', transport_router);
app.use('/tracking', trackingRouter)

app.get('/', (req, res) => {
  res.send('Hello Transports!')
})

module.exports = app