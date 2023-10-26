const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket");
const Project = require("../models/project");
const { ticketValidator } = require("../middleware/validation");
const requireAuth = require("../middleware/requireAuth");

router.get("/getTickets", async (req, res) => {
  try {
    const ticket = await Ticket.find({})
      .populate("project")
      .populate("assignee");
    res.status(200).send(ticket);
  } catch (e) {
    res
      .status(500)
      .json({ error: "Unable to fetch tickets from database" + e.message });
  }
});

router.post("/createTicket", ticketValidator, async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();

    await Project.findByIdAndUpdate(req.body.project, {
      $push: { tickets: ticket._id },
    });

    res.status(200).send(ticket);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "Unable to create ticket" + e.message });
  }
});

router.patch("/editTicket", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to edit ticket" + e.message });
  }
});

router.delete("/deleteTicket/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to delete ticket" + e.message });
  }
});

router.post("/createComment", async (req, res) => {
  const { _id, comment, userID, date } = req.body;
  try {
    const ticket = await Ticket.findById(_id);
    ticket.comments.push({ userID, comment, date });
    await ticket.save();
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to create comment" + e.message });
  }
});

router.patch("/editComment", async (req, res) => {
  const { _id, commentID, userID, date } = req.body;
  try {
    const ticket = await Ticket.findById(_id);
    const comment = ticket.comments.map((comment) => {
      return comment._id === commentID
        ? { ...comment, comment, userID, date }
        : comment;
    });

    await ticket.save();
    res.status(200).send(comment);
  } catch (e) {
    res.status(500).json({ error: "Unable to edit comment" + e.message });
  }
});

router.delete("/deleteComment/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to delete comment" + e.message });
  }
});

module.exports = router;
