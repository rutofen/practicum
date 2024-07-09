const express = require('express');
const bodyParser = require('body-parser');
const transport_router = require('./routers/transport');

const {create_transports_table} = require('./core/config_db');
const app = express();
create_transports_table();
require('dotenv').config();

app.use(bodyParser.json());

app.use('/api', transport_router);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
