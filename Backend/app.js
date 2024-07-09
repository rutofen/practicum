
const express = require('express');
const bodyParser = require('body-parser');
const pumpRouter = require('../Backend/routers/pump');
const statusRouter = require('../Backend/routers/status');
const transport_router = require('./routers/transport');


const { createTableIfNotExists } = require('./core/config_db');

const tableName = 'users';
const columnsDefinition = 'user_id SERIAL PRIMARY KEY, username TEXT';
createTableIfNotExists(tableName, columnsDefinition);

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/api', pumpRouter);
app.use('/api', statusRouter);
app.use('/api', transport_router);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
