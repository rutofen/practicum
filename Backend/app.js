const express = require('express');
const app = express();
const driversRouter = require('./routers/drivers'); 



app.use(express.json());

app.use('/drivers', driversRouter);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
