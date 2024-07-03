// const express = require('express');
// const bodyParser = require('body-parser');
// const userRouter = require('./routers/usersRoutes');
// const app = express();

// app.use(bodyParser.json());

// app.use('/api', userRouter);

// app.get('/', (req, res) => {
//   res.send('Hello Transports!');
// });

// module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/usersRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api', userRouter);

app.get('/', (req, res) => {
  res.send('Hello Transports!');
});

module.exports = app;
