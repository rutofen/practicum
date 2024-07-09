
const express = require('express');
const app = express();
const routesRouter = require('./routers/routes');

const { createTableIfNotExists } = require('./core/config_db');

createTableIfNotExists('routes', 'route_id SERIAL PRIMARY KEY, description TEXT');


require('dotenv').config();

app.use(express.json());
app.use('/api', routesRouter);

app.get('/', (req, res) => {
    res.send('Hello Transports!');
});

module.exports = app;
