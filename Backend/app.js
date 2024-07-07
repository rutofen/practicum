const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/usersRoutes');
const app = express();
const {create_users_table} = require('./core/config_db')

app.use(bodyParser.json());
app.use('/api', userRouter);
create_users_table();

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
