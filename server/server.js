//express 모듈들을 불러오기
const express = require("express");
const app = express();
const session = require("express-session");
//path 모듈을 불러오기
const path = require("path");
//db 모듈을 불러오기
const connection = require("./db");
//body-parser 모듈을 불러오기
const bodyParser = require("body-parser");
//분리해놓은 파일들 불러오기
const passport = require("./services/passport");
const authRoutes = require("./services/auth");
const apiRoutes = require("./services/routes");
//dotenv 모듈을 불러오기
require("dotenv").config();

//body-parser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 세션 설정
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }, // HTTPS를 사용하는 경우에만 설정
  })
);

// passport.js
app.use(passport.initialize());
app.use(passport.session());

console.log(process.env);

connection.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결 실패: " + err.stack);
    return;
  }
  console.log("데이터베이스 연결 성공.");
});

// auth.js
app.use("/auth", authRoutes);

// routes.js
app.use("/", apiRoutes);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(5500, () => {
  console.log("Server running in port 5500");
});
