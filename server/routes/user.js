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
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY", {
      expiresIn: "12h",
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

router.patch("/editProfile", requireAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body);
    await user.save();
    res.send({ message: "User details successfully updated" });
  } catch (e) {
    res.status(422).send({ error: "Unable to edit user details" });
  }
});

router.get("/allUsers", requireAuth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(422).send({ error: "Unable to fetch users" });
  }
});

module.exports = router;
