const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const ticketSchema = new Schmea({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
  },
  status: {
    type: String,
  },
  type: {
    type: [String],
    enum: ["Bug", "Feature Request", "Training Request"],
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
