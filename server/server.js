const express = require("express");
const app = express();
const path = require("path");
const connection = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();
console.log(process.env);

connection.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결 실패: " + err.stack);
    return;
  }
  console.log("데이터베이스 연결 성공.");
});

app.get("/api/pa", (req, res) => {
  console.log("API 요청 받음");
  connection.query("SELECT * FROM PA", (error, rows, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log(rows);
      res.json(rows);
    }
  });
});

app.post("/api/post", (req, res) => {
  const formData = req.body;
  console.log("Received form data:", formData);
  const { subject, title, description, startDate, endDate, referenceLink } = formData;
  const query =
    "INSERT INTO PA (subject, title, description, start_date, end_date, reference_link, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())";
  const values = [subject, title, description, startDate, endDate, referenceLink];

  connection.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("데이터 저장 성공:", result);
      res.status(200).json({ message: "Data saved successfully" });
    }
  });
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(5500, () => {
  console.log("Server running in port 5500");
});
