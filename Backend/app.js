const express = require('express');
const app = express();

const statusTransportRouter = require('./routers/statusTransport');

app.use(express.json());
app.use('/status-transport', statusTransportRouter);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
