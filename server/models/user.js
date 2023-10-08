const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  emailAddress: {
    type: String,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
  },
  surname: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
