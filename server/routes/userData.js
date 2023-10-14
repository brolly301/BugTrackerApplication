const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket");
const Project = require("../models/project");
const requireAuth = require("../middleware/requireAuth");

router.get("/userTickets", requireAuth, async (req, res) => {
  try {
    const tickets = await Ticket.find({ assignee: req.user._id });
    res.status(200).send(tickets);
  } catch (e) {
    res.status(500).json({ error: "Unable to fetch tickets" + e.message });
  }
});

router.get("/userProjects", requireAuth, async (req, res) => {
  try {
    const projects = await Project.find({ teamMembers: req.user._id });
    res.status(200).send(projects);
  } catch (e) {
    res.status(500).json({ error: "Unable to fetch projects" + e.message });
  }
});

module.exports = router;
