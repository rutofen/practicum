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
const userRouter = require('./routers/usersRoutes');
const pumpRouter = require('./routers/pump');
const statusRouter = require('./routers/status');
const statusTransport = require('./routers/statusTransport');
const TransportRouter = require('./routers/transport');
const transport_router = require('./routers/transport');
const bodyParser = require('body-parser');


const { createTablesFromJson } = require('./core/Init_db');
const { createTableIfNotExists } = require('./core/config_db');
const {create_users_table} = require('./core/config_db')

createTablesFromJson();
createTableIfNotExists('routes', 'route_id SERIAL PRIMARY KEY, description TEXT');
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
module.exports = app
module.exports = app;
