const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { registerValidator } = require("../middleware/validation");

router.post("/register", registerValidator, (req, res) => {
  try {
    const user = new User(req.body);
    user.save();
    res.status(200).send({ message: "User successfully created" });
  } catch (error) {
    res.status(422).send({ error: "Unable to create user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.send(user);
  } catch (e) {
    res.status(422).send({ error: "Unable to login" });
  }
});

module.exports = router;
