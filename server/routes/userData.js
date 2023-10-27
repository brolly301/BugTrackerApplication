const express = require("express");
const router = express.Router();
const User = require("../models/user");
const requireAuth = require("../middleware/requireAuth");

router.patch("/editUser", requireAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.body._id, { ...req.body });
    res.status(200).send(user);
  } catch (e) {
    res.status(500).json({ error: "Unable to update user" + e.message });
  }
});

router.delete("/deleteUser/:id", requireAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(500).json({ error: "Unable to delete user" + e.message });
  }
});

module.exports = router;
