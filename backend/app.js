const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const skillRoutes = require('./routes/skills');
const courseRoutes = require('./routes/courses');
const jobRoutes = require('./routes/jobs');
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());
connectDB();
PORT = process.env.PORT || 3000;

app.use('/api/v1/skills',skillRoutes);
app.use('/api/v1/courses',courseRoutes);
app.use('/api/v1/jobs',jobRoutes);
app.use("/api/v1/users", authRoutes);

app.listen(PORT,() => {
    console.log(`Port is up on ${PORT}`);
    
})