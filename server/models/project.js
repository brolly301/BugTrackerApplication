const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectID: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  projectManager: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  teamMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
