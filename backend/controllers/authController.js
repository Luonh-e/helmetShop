const crypto = require("crypto");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id, rememberMe) => {
  const expiresIn = rememberMe ? "30d" : "1h";
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const token = generateToken(user._id, false);

    res.status(201).json({ token, msg: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { email, password, rememberMe } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const token = generateToken(user._id, rememberMe);

    res.status(200).json({ token, msg: "Logged in successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    user.resetPasswordExpire = Date.now() + 60 * 1000;

    await user.save();

    const message = `We heard that you lost your password. Sorry about that!

But don't worry! You can use the following OTP code to reset your password: \n\n ${otp} \n\n If you don't use this code within 0:59, it will expire. \n\n Thanks`;

    await sendEmail({
      email: user.email,
      subject: "Password Reset OTP",
      message,
    });

    res.status(200).json({ msg: "OTP sent to your email" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

    if (
      user.resetPasswordToken !== hashedOtp ||
      user.resetPasswordExpire < Date.now()
    ) {
      return res.status(400).json({ msg: "Invalid or expired OTP" });
    }

    res
      .status(200)
      .json({ msg: "OTP verified, you can now reset your password" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    if (user.resetPasswordExpire < Date.now()) {
      return res.status(400).json({ msg: "Reset token has expired" });
    }

    user.password = newPassword;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({ msg: "Password reset successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
