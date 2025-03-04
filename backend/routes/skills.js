const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");
const authenticate = require("../middleware/auth");
router.get("/skills", authenticate, async (req, res) => {
  try {
    const skills = await Skill.find({ userId: req.user.id });
    res.json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ message: "Failed to fetch skills" });
  }
});

router.post("/skills", authenticate, async (req, res) => {
  const { name, status } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Skill name is required" });
  }

  try {
    const skill = new Skill({
      name,
      status: status || "Pending", // Default status is "Pending"
      userId: req.user.id, // Set by authenticate middleware
    });

    const savedSkill = await skill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    console.error("Error creating skill:", error);
    res.status(500).json({ message: "Failed to create skill" });
  }
});

router.patch("/:id", authenticate, async (req, res) => {
  const { status } = req.body;

  try {
    const skill = await Skill.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { status },
      { new: true }
    );
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }
    res.json(skill);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a skill
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const skill = await Skill.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;






// const express = require('express');
// const Skill = require('../models/Skill');
// const router = express.Router();

// // Create a new skill
// router.post('/', async (req, res) => {
//   try {
//     const { name, category, difficulty } = req.body;
//     const newSkill = new Skill({ name, category, difficulty });
//     await newSkill.save();
//     res.status(201).json(newSkill);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get all skills
// router.get('/', async (req, res) => {
//   try {
//     const skills = await Skill.find();
//     res.status(200).json(skills);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get skill by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const skill = await Skill.findById(req.params.id);
//     if (!skill) return res.status(404).json({ error: 'Skill not found' });
//     res.status(200).json(skill);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
