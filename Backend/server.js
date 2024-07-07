 require('dotenv').config();
 const app = require('./app');

 const port = process.env.PORT || 3010;
 const host = process.env.HOST || '127.0.0.1';
const { createStatusTransportTable } = require('./core/config_db');

createStatusTransportTable().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
}).catch(error => {
  console.error('Error starting the server:', error);
});
