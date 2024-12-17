const express = require('express');
const Course = require('../models/Course');
const Skill = require('../models/Skill');
const router = express.Router();

// Create a new course
router.post('/', async (req, res) => {
  try {
    const { name, platform, skillId } = req.body;
    const skill = await Skill.findById(skillId);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });

    const newCourse = new Course({ name, platform, skill: skillId });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('skill');
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get courses by skillId
router.get('/skill/:id', async (req, res) => {
  try {
    const courses = await Course.find({ skill: req.params.id }).populate('skill');
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
