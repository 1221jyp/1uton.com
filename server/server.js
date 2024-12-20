// server.js
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const apiRoutes = require("./services/routes");
const authRoutes = require("./services/auth"); // auth.js 추가
const cookieParser = require("cookie-parser");
const sessionMiddleware = require("./services/session");

require("dotenv").config();

app.use(cookieParser("secret"));

app.use(sessionMiddleware);

// body-parser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 로그인 및 회원가입 라우트 설정
app.use("/", authRoutes); // auth.js에서 정의한 라우트를 사용

// 기존의 apiRoutes 설정
app.use("/", apiRoutes);

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(5500, () => {
  console.log("Server running in port 5500");
});
