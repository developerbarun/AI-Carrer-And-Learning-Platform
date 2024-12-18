const express = require('express');
const User = require('../models/User');
const protect = require('../middleware/auth'); // Import the protect middleware
const router = express.Router();

// Protected route to get the user profile
router.get('/profile', protect, async (req, res) => {
  try {
    // Access the user ID from the token (stored in req.user by the protect middleware)
    const user = await User.findById(req.user.id).select('-password'); // Don't send the password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
