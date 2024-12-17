const express = require('express');
const Skill = require('../models/Skill');
const router = express.Router();

// Create a new skill
router.post('/', async (req, res) => {
  try {
    const { name, category, difficulty } = req.body;
    const newSkill = new Skill({ name, category, difficulty });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
