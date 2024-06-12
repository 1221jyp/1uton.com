// db.js
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "1uton.com",
  user: process.env.MySQLId,
  password: process.env.MySQLPassword,
  database: process.env.MySQLDBname,
});

connection.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결 실패: " + err.stack);
    return;
  }
  console.log("데이터베이스 연결 성공.");
});

module.exports = connection;
