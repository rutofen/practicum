
const express = require('express');
const bodyParser = require('body-parser');
const pumpRouter = require('../Backend/routers/pump');
const statusRouter = require('../Backend/routers/status');
const {create_pumps_and_status_table} = require('./core/config_db');
const transport_router = require('./routers/transport');

const {create_transports_table} = require('./core/config_db');
create_transports_table();
require('dotenv').config();



const app = express();
create_pumps_and_status_table()
app.use(bodyParser.json());
app.use('/api', pumpRouter);
app.use('/api', statusRouter);
app.use('/api', transport_router);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
