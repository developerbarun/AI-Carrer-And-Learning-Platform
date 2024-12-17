const express = require('express');
const Job = require('../models/Job');
const Skill = require('../models/Skill');
const router = express.Router();

// Create a new job
router.post('/', async (req, res) => {
  try {
    const { title, company, skillId } = req.body;
    const skill = await Skill.findById(skillId);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });

    const newJob = new Job({ title, company, skill: skillId });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().populate('skill');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get jobs by skillId
router.get('/skill/:id', async (req, res) => {
  try {
    const jobs = await Job.find({ skill: req.params.id }).populate('skill');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
