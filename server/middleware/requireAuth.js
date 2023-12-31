const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = (req, res, next) => {
  let accessToken = req.cookies.jwt;

  if (!accessToken) {
    return res.status(401).send({ errorMessage: "You must be logged in" });
  }

  jwt.verify(accessToken, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ errorMessage: "You must be logged in" });
    }

    const { userId } = payload;

    const user = await User.findById(userId);

    req.user = user;
    next();
  });
};
