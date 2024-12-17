const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill', // Reference to the Skill model
    required: true,
  },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
