const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./models");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Louai application." });
});

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
