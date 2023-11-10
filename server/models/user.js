const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  userID: {
    type: String,
  },
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
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "Project Manager", "Developer", "Test Engineer", "Support"],
  },
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
      if (err) return reject(err);

      if (!isMatch) return reject(false);

      resolve(true);
    });
  });
};
module.exports = mongoose.model("User", UserSchema);
