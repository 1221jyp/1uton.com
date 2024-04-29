const express = require("express");
const app = express();
const path = require("path");
const connection = require("./db");
require("dotenv").config();
console.log(process.env);

app.get("/api/mysql", (req, res) => {
  console.log("API 요청 받음");
  connection.query("SELECT description FROM topic WHERE author='jyp'", (error, rows, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log(rows);
      res.json({ rows: rows });
    }
  });
});

app.get("/api/hi", (req, res) => {
  res.json({ rows: "answer" });
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(5500, () => {
  console.log("Server running in poort 5500");
});
