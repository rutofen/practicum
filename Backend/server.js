const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3005;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});


