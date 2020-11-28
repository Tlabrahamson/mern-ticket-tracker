const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Connect to MongoDB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connect to the DB!")
);

const port = process.env.PORT || 5000;

// Listen for the port
app.listen(port, () => console.log("Server is up!"));
