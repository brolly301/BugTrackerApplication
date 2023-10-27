const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket");
const Project = require("../models/project");
const { ticketValidator } = require("../middleware/validation");
const requireAuth = require("../middleware/requireAuth");
const Comment = require("../models/comment");

router.get("/getTickets", async (req, res) => {
  try {
    const ticket = await Ticket.find({})
      .populate("project")
      .populate("assignee")
      .populate("comments");
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
    const ticket = await Ticket.findOneAndUpdate(
      { ticketID: req.body.ticketID },
      req.body
    );
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to edit ticket" + e.message });
  }
});

router.delete("/deleteTicket/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findOneAndDelete({ ticketID: req.params.id });
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to delete ticket" + e.message });
  }
});

router.post("/createComment", async (req, res) => {
  const { ticketID, commentID, comment, userID, date } = req.body;
  try {
    const newComment = new Comment({ commentID, comment, userID, date });
    await newComment.save();
    const ticket = await Ticket.findOne({ ticketID: ticketID });
    ticket.comments.push(newComment._id);
    await ticket.save();
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to create comment" + e.message });
  }
});

router.patch("/editComment", async (req, res) => {
  try {
    const comment = await Comment.findOneAndUpdate(
      { commentID: req.body.commentID },
      {
        comment: req.body.comment,
      }
    );
    res.status(200).send(comment);
  } catch (e) {
    res.status(500).json({ error: "Unable to edit comment" + e.message });
  }
});

router.delete("/deleteComment/:id", async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({
      commentID: req.params.id,
    });
    res.status(200).send(comment);
  } catch (e) {
    res.status(500).json({ error: "Unable to delete comment" + e.message });
  }
});

module.exports = router;
