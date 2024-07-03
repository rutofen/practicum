const express = require('express');
const bodyParser = require('body-parser');
const statusRouter = require('./routers/status');
const app = express();

app.use(bodyParser.json());
app.use('/api', statusRouter);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
