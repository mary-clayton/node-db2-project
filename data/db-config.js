// IMPORTS
const knex = require('knex')
const config = require('../knexfile.js')

// DB
const db = knex(config.development);

// EXPORTS
module.exports = db;