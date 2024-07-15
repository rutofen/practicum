require('dotenv').config();
const express = require('express');
const driversRouter = require('./routers/drivers'); 
const { create_tracking_table } = require('./core/config_db');
const authRouter = require('./routers/auth'); 

app.use(express.json());
create_tracking_table();

app.use('/drivers', driversRouter);
app.use('/auth', authRouter);
const bodyParser = require('body-parser');
const app = express();

const trackingRouter = require('./routers/tracking');
const routesRouter = require('./routers/routes');
const bodyParser = require('body-parser');
const pumpRouter = require('./routers/pump');
const statusRouter = require('./routers/status');
const { create_tracking_table } = require('./core/config_db');
const userRouter = require('./routers/usersRoutes');
const pumpRouter = require('./routers/pump');
const statusRouter = require('./routers/status');
const statusTransport = require('./routers/statusTransport');
const TransportRouter = require('./routers/transport');
<<<<<<< HEAD
const transport_router = require('./routers/transport');
const bodyParser = require('body-parser');


=======
// const pumpRouter = require('../Backend/routers/pump');
// const statusRouter = require('../Backend/routers/status');
const transport_router = require('./routers/transport');
const bodyParser = require('body-parser');

// const { create_tracking_table } = require('./core/config_db')
const {create_pumps_and_status_table} = require('./core/config_db');
// const { create_tracking_table } = require('./core/config_db')
>>>>>>> c085faf6b5db791b9747415932ad68e3efb5e7ee
const { createTablesFromJson } = require('./core/Init_db');
const { createTableIfNotExists } = require('./core/config_db');
const {create_users_table} = require('./core/config_db')

<<<<<<< HEAD

createTablesFromJson();
createTableIfNotExists('routes', 'route_id SERIAL PRIMARY KEY, description TEXT');
create_users_table();
=======
// create_tracking_table()
// createTablesFromJson();
// create_tracking_table()
// createTableIfNotExists('routes', 'route_id SERIAL PRIMARY KEY, description TEXT');
// createTablesFromJson();
// create_users_table();
>>>>>>> c085faf6b5db791b9747415932ad68e3efb5e7ee

app.use(express.json());
app.use(express.json());
app.use(bodyParser.json());

// app.use('/api', pumpRouter);
// app.use('/api', statusRouter);
// app.use('/api', statusTransport);
app.use('/api', TransportRouter);
<<<<<<< HEAD
app.use('/api', routesRouter);
app.use('/tracking', trackingRouter);
app.use('/api', userRouter);
app.use('/api', routesRouter);
=======
// app.use('/api', userRouter);
// app.use('/api', routesRouter);
>>>>>>> c085faf6b5db791b9747415932ad68e3efb5e7ee
app.use('/tracking', trackingRouter)

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});