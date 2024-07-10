
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/usersRoutes');
const app = express();
const pumpRouter = require('../Backend/routers/pump');
const statusRouter = require('../Backend/routers/status');
const transport_router = require('./routers/statusTransport');
require('dotenv').config();


const { createTableIfNotExists } = require('./core/config_db');

createTableIfNotExists('status', 'status_id SERIAL PRIMARY KEY, description TEXT');
createTableIfNotExists('pump', 'pump_id SERIAL PRIMARY KEY, description TEXT');


const {create_users_table} = require('./core/config_db')

app.use(bodyParser.json());
create_users_table();

app.use('/api', pumpRouter);
app.use('/api', statusRouter);
app.use('/api', transport_router);


app.use('/api', userRouter);
app.get('/', (req, res) => {
  res.send('Hello Transports!');
});


module.exports = app;
