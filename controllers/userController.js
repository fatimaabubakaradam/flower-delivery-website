const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    
    const token = createToken(user._id);
    res.status(201).json({ message: 'User signed up', user: { id: user._id, name, email }, token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to sign up' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    
    const token = createToken(user._id);
    res.status(200).json({ message: 'Login successful', user: { id: user._id, name: user.name, email: user.email }, token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log in' });
  }
};

module.exports = { signupUser, loginUser };
