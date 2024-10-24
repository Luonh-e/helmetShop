const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Route: Đăng ký
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Kiểm tra người dùng đã tồn tại chưa
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tạo người dùng mới
    user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Tạo và trả JWT
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h", // Thời hạn token là 1 giờ
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Route: Đăng nhập
router.post("/login", async (req, res) => {
  const { email, password, rememberMe } = req.body; // Nhận rememberMe từ body request

  try {
    // Kiểm tra người dùng
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // So sánh mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Tạo payload cho JWT
    const payload = { userId: user._id };

    // Đặt thời gian sống của token dựa trên rememberMe
    let tokenExpiry = "1h"; // Mặc định token hết hạn trong 1 giờ
    if (rememberMe) {
      tokenExpiry = "7d"; // Nếu nhớ người dùng, token hết hạn trong 7 ngày
    }

    // Tạo và trả JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: tokenExpiry,
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
