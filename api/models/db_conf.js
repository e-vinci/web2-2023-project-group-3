const Database = require('better-sqlite3');
const config = require('../config.js');

const db = new Database(config.dbPath);
module.exports = db;