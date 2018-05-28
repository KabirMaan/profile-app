const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
const app = express();

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//User Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
