const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  projectManager: {
    // type: Schema.Types.ObjectId,
    // ref: "User",
    type: String,
  },
  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
