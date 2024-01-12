const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Token = require("../models/token");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const {
  registerValidator,
  profileValidator,
} = require("../middleware/validation");
const requireAuth = require("../middleware/requireAuth");

router.post("/register", registerValidator, async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.emailAddress });

  if (emailExists) {
    console.log("Email already taken");
    return res.status(403).send({ error: "Email already taken" });
  }

  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY", {
      expiresIn: "2h",
    });

    res.cookie("jwt", token, { expire: new Date() + 1, httpOnly: true });

    res.send(token);
  } catch (error) {
    res.status(422).send({ error: "Unable to create user" });
  }
});

router.post("/login", async (req, res) => {
  const { emailAddress, password } = req.body;

  if (!emailAddress || !password) {
    return res
      .status(422)
      .send({ error: "Please provide your email and password." });
  }

  const user = await User.findOne({ emailAddress: emailAddress });

  if (!user) {
    return res.status(422).send({ error: "Invalid password or email." });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY", {
      expiresIn: "12h",
    });

    res.cookie("jwt", token, { expire: new Date() + 1, httpOnly: true });

    res.send(token);
  } catch (e) {
    res.status(422).send({ error: "Invalid Email or Password" });
  }
});

router.get("/logout", (req, res) => {
  try {
    res.clearCookie("jwt");
    res.send({ message: "Logged out successfully" });
  } catch (e) {
    res.status(422).send({ error: "Unable to logout" });
  }
});

router.get("/userDetails", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.send(user);
  } catch (e) {
    res.status(422).send({ error: "Unable to fetch user details" });
  }
});

router.patch(
  "/editProfile",
  requireAuth,
  profileValidator,
  async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user._id, req.body);
      await user.save();
      res.send({ message: "User details successfully updated" });
    } catch (e) {
      res.status(422).send({ error: "Unable to edit user details" });
    }
  }
);

router.get("/allUsers", requireAuth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(422).send({ error: "Unable to fetch users" });
  }
});

router.post("/forgotPassword", async (req, res) => {
  try {
    const { email } = req.body;

    const validUser = await User.findOne({ emailAddress: email });

    if (!validUser) {
      return res.status(422).json({
        message: "Invalid User",
      });
    }

    const token = await Token.findOne({ email: validUser.emailAddress });

    if (token) {
      await Token.findOneAndDelete({ email: validUser.emailAddress });
    }

    const newToken = (Math.random() * 2023238912).toFixed(0);

    await new Token({
      email: email,
      token: newToken,
    }).save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marcrobertjohn@gmail.com",
        pass: "qklbtfcwnloxeckw",
      },
    });

    const options = {
      from: "marcrobertjohn@gmail.com",
      to: "marcrobertjohn@gmail.com",
      subject: "Reset Password",
      html: `Your password reset link: http://localhost:3000/forgotPassword/${newToken}/${validUser._id}`,
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
      }
      res.send.JSON({
        message: "Message successfully sent.",
      });
    });

    res.status(200).json({
      message: "Success",
    });
  } catch (e) {
    res.status(422).send({ error: "Unable to send out password reset email" });
    console.log(e);
  }
});

router.post("/passwordReset", async (req, res) => {
  const {
    password: { password },
    token,
    id,
  } = req.body;

  bcrypt.genSalt(10, async function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) return next(err);

      await User.findByIdAndUpdate(id, { password: hash });
    });
  });

  await Token.deleteOne({ token: token });

  res.status(200).json({
    message: "Success",
  });
});

module.exports = router;
