const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commentID: {
    type: String,
  },
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
});

module.exports = mongoose.model("Comment", commentSchema);
