const express = require('express');
const app = express();
const routesRouter = require('./routers/routes');

app.use(express.json());
app.use('/api', routesRouter);

app.get('/', (req, res) => {
    res.send('Hello Transports!');
});

module.exports = app;
