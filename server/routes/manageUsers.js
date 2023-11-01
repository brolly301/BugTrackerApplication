const express = require("express");
const router = express.Router();
const User = require("../models/user");
const requireAuth = require("../middleware/requireAuth");
const {
  profileValidator,
  registerValidator,
} = require("../middleware/validation");

router.post("/createUser", registerValidator, async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.emailAddress });

  if (emailExists) {
    console.log("Email already taken");
    return res.status(403).send({ error: "Email already taken" });
  }

  try {
    const user = new User(req.body);
    await user.save();

    res.send(user);
  } catch (error) {
    res.status(422).send({ error: "Unable to create user" });
  }
});

router.patch("/editUser", requireAuth, profileValidator, async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { userID: req.body.userID },
      { ...req.body }
    );
    res.status(200).send(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "Unable to update user" + e.message });
  }
});

router.delete("/deleteUser/:id", requireAuth, async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ userID: req.params.id });
    res.status(200).send(user);
  } catch (e) {
    res.status(500).json({ error: "Unable to delete user" + e.message });
  }
});

module.exports = router;
