// IMPORTS
const server = require('./server');
require('dotenv').config()

// PORT
const port = process.env.PORT;

// SERVER
server.listen(port, () => {
    console.log(`\n** Running on port ${port} **\n`)
});