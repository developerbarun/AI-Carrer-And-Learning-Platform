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
PORT = process.env.PORT || 5000;

app.use('/api/skills',skillRoutes);
app.use('/api/courses',courseRoutes);
app.use('/api/jobs',jobRoutes);
app.use("/api/users", authRoutes);

app.listen(PORT,() => {
    console.log(`Port is up on ${PORT}`);
    
})