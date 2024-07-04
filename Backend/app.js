const express = require('express');
const bodyParser = require('body-parser');
const transport_router = require('./routers/transport');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

app.use('/api', transport_router);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
