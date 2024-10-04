const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Initialize the app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Serve static assets if in production (for deploying the React app)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

module.exports = app;
