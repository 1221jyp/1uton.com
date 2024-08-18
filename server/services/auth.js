const express = require("express");
const passport = require("passport");
const router = express.Router();

// Google OAuth 인증 라우트
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth 콜백 라우트
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    // 성공적인 인증 후 리다이렉트할 경로
    res.redirect("/");
  }
);

module.exports = router;
