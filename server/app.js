const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const userRoute = require("./routes/userRoute");

dotenv.config();

// Connect to MongoDB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to the DB!")
);

// Middleware
app.use(cors());
app.use(express.json());

// Route Middleware
app.use("/api/user", userRoute);

const port = process.env.PORT || 5000;

// Listen for the port
app.listen(port, () => console.log("Server is up!"));
