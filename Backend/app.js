
const express = require('express');
const bodyParser = require('body-parser');
const pumpRouter = require('../Backend/routers/pump');

const app = express();

app.use(bodyParser.json());
app.use('/api', pumpRouter);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
