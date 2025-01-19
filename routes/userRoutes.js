const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');
const User = require('../models/userModel'); 

const router = express.Router();


router.post('/signup', signupUser);
router.post('/login', loginUser);


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
