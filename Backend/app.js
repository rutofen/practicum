
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/usersRoutes');
const app = express();
const pumpRouter = require('./routers/pump');
const statusRouter = require('./routers/status');
const statusTransport = require('./routers/statusTransport');
const TransportRouter = require('./routers/transport');

require('dotenv').config();


const { createTableIfNotExists } = require('./core/config_db');

createTableIfNotExists('status', 'status_id SERIAL PRIMARY KEY, description TEXT');
createTableIfNotExists('pump', 'pump_id SERIAL PRIMARY KEY, description TEXT');


const {create_users_table} = require('./core/config_db')

app.use(bodyParser.json());
create_users_table();

app.use('/api', pumpRouter);
app.use('/api', statusRouter);
app.use('/api', statusTransport);
app.use('/api', TransportRouter);
app.use('/api', userRouter);
app.get('/', (req, res) => {
  res.send('Hello Transports!');
});


module.exports = app;
