exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");

    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordExpire = Date.now() + 7 * 60 * 60 * 1000;

    await user.save();

    const resetUrl = `${process.env.FRONTEND_BASE_URL}/reset-password/${resetToken}`;

    const message = `We heard that you lost your password. Sorry about that!

But don't worry! You can use the following url to reset your password: \n\n ${resetUrl} \n\n If you don't use this link within 7 hours, it will expire. \n\n Thanks`;

    await sendEmail({
      email: user.email,
      subject: "Password Reset",
      message,
    });

    res.status(200).json({ msg: "Reset email sent" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
