require('dotenv').config();
const express = require('express');
const app = express();

const trackingRouter = require('./routers/tracking');
const routesRouter = require('./routers/routes');
const userRouter = require('./routers/usersRoutes');
const pumpRouter = require('./routers/pump');
const statusRouter = require('./routers/status');
const statusTransport = require('./routers/statusTransport');
const TransportRouter = require('./routers/transport');
const pumpRouter = require('../Backend/routers/pump');
const statusRouter = require('../Backend/routers/status');
const transport_router = require('./routers/transport');
const bodyParser = require('body-parser');

const { create_tracking_table } = require('./core/config_db')
const {create_pumps_and_status_table} = require('./core/config_db');
const { create_tracking_table } = require('./core/config_db')
const { createTablesFromJson } = require('./core/Init_db');
const { createTableIfNotExists } = require('./core/config_db');
const {create_users_table} = require('./core/config_db')

create_tracking_table()
createTablesFromJson();
create_tracking_table()
createTableIfNotExists('routes', 'route_id SERIAL PRIMARY KEY, description TEXT');
createTablesFromJson();
create_users_table();

app.use(express.json());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api', pumpRouter);
app.use('/api', statusRouter);
app.use('/api', statusTransport);
app.use('/api', TransportRouter);
app.use('/api', userRouter);
app.use('/api', routesRouter);
app.use('/tracking', trackingRouter)

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
