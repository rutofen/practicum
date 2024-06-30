const express = require('express');
const app = express();
const example_router = require('./routers/example')

app.use('/example', example_router)

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;