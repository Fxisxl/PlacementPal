// server.js

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect(process.env.DB_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const companySchema = new mongoose.Schema({
  url: String,
  image: String,
  location: String,
  name: String,
  description: String,
  website: String,
  year: Number,
  industry: String,
  dateOfArrival: String,
  technologies: String,
});

const Company = mongoose.model("Company", companySchema);

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Route to handle POST requests for inserting data
app.post("/companies", async (req, res) => {
  try {
    const {
      url,
      image,
      location,
      name,
      description,
      website,
      year,
      industry,
      dateOfArrival,
      technologies,
    } = req.body;

    // Create a new company document
    const company = new Company({
      url,
      image,
      location,
      name,
      description,
      website,
      year,
      industry,
      dateOfArrival,
      technologies,
    });
    await company.save();

    res.status(201).json({ message: "Company created successfully", company });
  } catch (error) {
    console.error("Error creating company:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
