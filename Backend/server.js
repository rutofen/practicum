const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3005;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
<<<<<<< HEAD


=======
>>>>>>> c085faf6b5db791b9747415932ad68e3efb5e7ee
