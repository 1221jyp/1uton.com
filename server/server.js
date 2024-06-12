const express = require("express");
const app = express();
const path = require("path");
const connection = require("./db");
const { request } = require("http");
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
app.get("/api/ihan", (req, res) => {
  res.sendFile(path.join(__string, "../client/build", "index.html"));
});

app.get( '/api/create', function(request, response){
  { fs.readdir(' ./data', function(error, filelist){
    var title = 'WEB - create';
    var list = template. list(filelist); 
    var html = template.HTML(title, list, 
      <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p> 
        <p> 
          <textarea name="description" placeholder="descrilption"></textarea> 
        </p> 
        <p> 
          <input type="submit"> 
        </p> 
      </form>
    ,'');
   response.writeHead(200); 
   response. end(html);
   
app.ger(funtion(res))
app.listen(5500, () => {
  console.log("Server running in port 5500");
});