const express = require('express');
const app = express();
const driversRouter = require('./routers/drivers'); 
const {create_tracking_table} = require('./core/config_db');


app.use(express.json())
create_tracking_table()
app.use('/drivers', driversRouter);
app.use('/auth', authRouter);

const authRouter = require('./routers/auth');

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
