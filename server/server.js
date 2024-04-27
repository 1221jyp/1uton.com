const express = require("express");
const app = express();
const mysql = require("mysql");
require("dotenv").config();
console.log(process.env);
const connection = mysql.createConnection({
  host: "www.1uton.com",
  user: process.env.MySQLId,
  password: process.env.MySQLPassword,
  database: process.env.MySQLDBname,
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // 모든 출처 허용
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

connection.connect();

connection.query("SELECT author FROM topic WHERE author='jyp'", (error, rows, fields) => {
  if (error) throw error;
  console.log(rows);
  app.get("/mysql", (req, res) => {
    res.json({ rows: rows });
  });
});

connection.end();

app.listen(5500, () => {
  console.log("Server running in port 5500");
});
