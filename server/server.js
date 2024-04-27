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

connection.connect();

connection.query("SELECT * from topic", (error, rows, fields) => {
  if (error) throw error;
  console.log("User info is: ", rows);
});

connection.end();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(5500, () => {
  console.log("Server running in port 5500");
});
