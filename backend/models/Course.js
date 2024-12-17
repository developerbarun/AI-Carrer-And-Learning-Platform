const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  platform: { type: String, required: true },
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill', // This creates a reference to the Skill model
    required: true,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
