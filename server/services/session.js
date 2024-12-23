//services/session.js

const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const connection = require("../db"); // PostgreSQL 연결 객체
require("dotenv").config();

const sessionMiddleware = session({
  store: new pgSession({
    pool: connection,
    tableName: "session",
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.COOKIE_SECURE === "true" }, // HTTPS 환경에서는 true로 설정
});

module.exports = sessionMiddleware;
