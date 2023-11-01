const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectid: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  projectManager: {
    type: String,
  },
  teamMembers: [
    {
      type: String,
    },
  ],
  tickets: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
