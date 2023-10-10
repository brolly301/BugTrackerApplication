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
    // type: Schema.Types.ObjectId,
    // ref: "Project",
    type: "String",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Closed"],
  },
  assignee: {
    // type: Schema.Types.ObjectId,
    // ref: "User",
    type: "String",
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
