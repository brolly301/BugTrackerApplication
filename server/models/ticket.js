const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
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
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  status: {
    type: String,
    enum: ["Backlog", "In Progress", "Testing", "Closed"],
  },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      userID: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
      },
      date: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Ticket", ticketSchema);
