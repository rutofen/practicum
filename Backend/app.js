const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/usersRoutes');
const app = express();
require('dotenv').config();
const {create_users_table} = require('./core/config_db')

app.use(bodyParser.json());
create_users_table();


app.use('/api', userRouter);
app.get('/', (req, res) => {
  res.send('Hello Transports!');
});


module.exports = app;
