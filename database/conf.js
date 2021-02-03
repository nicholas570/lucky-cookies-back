require('dotenv').config();
const mysql = require('mysql');

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  timezone: 'Europe/Paris',
};

const db = mysql.createPool(config);

module.exports = db;
