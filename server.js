const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

// Connect Database
// connectDB();

app.get("/", (req, res) => res.json({ msg: "Mainnet Email Service API..." }));

app.use("/api/email-service", require("./routes/email"));

const PORT = process.env.PORT || 5000;

// set port 5001 on vercel
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
