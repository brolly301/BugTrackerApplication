const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { registerValidator } = require("../middleware/validation");
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
    res.status(200).send({ message: "User successfully created" });
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

    res.cookie("jwt", token, { httpOnly: true, secure: false });

    res.send({ token });
  } catch (e) {
    res.status(422).send({ error: "Invalid Email or Password" });
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

module.exports = router;
