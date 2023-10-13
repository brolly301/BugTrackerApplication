const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket");
const { ticketValidator } = require("../middleware/validation");
const requireAuth = require("../middleware/requireAuth");

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

router.post("/createTicket", ticketValidator, async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
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

router.get("/userTickets", requireAuth, async (req, res) => {
  console.log(req.user._id);
  try {
    const tickets = await Ticket.find({ assignee: req.user._id });
    console.log(tickets);
    res.status(200).send(tickets);
  } catch (e) {
    res.status(500).json({ error: "Unable to fetch tickets" + e.message });
  }
});

module.exports = router;
