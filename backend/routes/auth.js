const express = require("express");
const {
  register,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/forgot-password", forgotPassword);

router.post("/verify-otp", verifyOtp);

router.put("/reset-password", resetPassword);

module.exports = router;
