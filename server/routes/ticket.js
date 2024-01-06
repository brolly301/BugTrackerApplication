const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket");
const Project = require("../models/project");
const {
  ticketValidator,
  commentValidator,
} = require("../middleware/validation");
const requireAuth = require("../middleware/requireAuth");
const Comment = require("../models/comment");

router.get("/getTickets", async (req, res) => {
  try {
    const ticket = await Ticket.find({});

    res.status(200).send(ticket);
  } catch (e) {
    res
      .status(500)
      .json({ error: "Unable to fetch tickets from database" + e.message });
  }
});

router.post("/createTicket", async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();

    await Project.findOneAndUpdate(
      { projectid: req.body.projectid },
      {
        $push: { tickets: ticket.ticketID },
      }
    );

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

router.post("/createComment", commentValidator, async (req, res) => {
  const { ticketID, commentID, comment, userID, date } = req.body;
  try {
    const ticket = await Ticket.findOneAndUpdate(
      { ticketID: ticketID },
      { $push: { comments: { commentID, comment, userID, date } } },
      { new: true }
    );

    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to create comment" + e.message });
  }
});

router.patch("/editComment", commentValidator, async (req, res) => {
  const { ticketID, commentID, comment } = req.body;

  try {
    const ticket = await Ticket.findOneAndUpdate(
      { ticketID: ticketID, "comments.commentID": commentID },
      { $set: { "comments.$.comment": comment } },
      { new: true }
    );
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to edit comment" + e.message });
  }
});

router.delete("/deleteComment/:ticketID/:commentID", async (req, res) => {
  try {
    const { ticketID, commentID } = req.params;

    const ticket = await Ticket.findOneAndUpdate(
      { ticketID: ticketID },
      { $pull: { comments: { commentID: commentID } } },
      { new: true }
    );
    res.status(200).send(ticket);
  } catch (e) {
    res.status(500).json({ error: "Unable to delete comment" + e.message });
  }
});

module.exports = router;
