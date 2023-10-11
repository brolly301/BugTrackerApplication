//packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();

//database & session storage
const MONGO_URI =
  "mongodb+srv://marcrobertjohn:BugTrackerApp@cluster0.a68rnbk.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) =>
    console.log("Database not connected. Check Mongo URI." + err)
  );

const sessionOptions = {
  secret: "Test",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: MONGO_URI }),
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 2,
    maxAge: 120 * 60 * 1000,
  },
};

app.use(session(sessionOptions));

//middlewares
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());

//Port & Listener
const port = 8080;
app.listen(port, () => console.log(`Running on Server ${port}`));

//routes

app.use("/", require("./routes/user"));
app.use("/tickets", require("./routes/ticket"));
app.use("/projects", require("./routes/project"));
