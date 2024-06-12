// db.js
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "1uton.com",
  user: process.env.MySQLId,
  password: process.env.MySQLPassword,
  database: process.env.MySQLDBname,
});

module.exports = connection;
