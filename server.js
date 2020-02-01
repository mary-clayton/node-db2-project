// IMPORTS
const express = require('express');
const helmet = require('helmet');
const carsRouter = require('./cars-router.js')

// SERVER
const server = express();

// SERVER.USE
server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

// // GET
// server.get('/', (req,res) => {
//     res.send('<h3>Welcome to the cars API</h3>')
// });

// EXPORTS
module.exports = server;

