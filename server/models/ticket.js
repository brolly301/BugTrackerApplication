const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  ticketID: {
    type: String,
  },
  summary: {
    type: String,
  },
  description: {
    type: String,
  },
  issueType: {
    type: String,
    enum: ["Bug", "Feature Request", "Design Request"],
  },
  projectid: {
    type: String,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Testing", "Closed"],
  },
  assignee: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Ticket", ticketSchema);
