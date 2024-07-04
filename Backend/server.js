<<<<<<< HEAD
//server.js
const app = require('./app')
=======
require('dotenv').config();
const app = require('./app');
>>>>>>> 01b986917a439771d848ecea1f6ea3c66d832d17

const port = process.env.PORT || 3010
const host = process.env.HOST || '127.0.0.1'

app.listen(port, () => {
  console.log("runinggggg")
  console.log(`Server running at http://${host}:${port}/`)
})
