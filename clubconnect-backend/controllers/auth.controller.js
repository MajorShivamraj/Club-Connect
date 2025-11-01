// This is the logic for registering and logging in users.

const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// --- Register User ---
exports.registerUser = async (req, res) => {
  const { fullName, email, password, role, clubName, department } = req.body;

  try {
    // 1. Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // 2. Create new user instance
    user = new User({
      fullName,
      email,
      password, // Password will be hashed by the 'pre-save' hook in the model
      role,
      clubName: role === 'club' ? clubName : '',
      department: role === 'teacher' ? department : '',
    });

    // 3. Save user to database (this triggers the password hashing)
    await user.save();

    // 4. Create and sign a JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
        name: user.fullName
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '30d' }, // Token expires in 30 days
      (err, token) => {
        if (err) throw err;
        // 5. Send the token and user info back
        res.status(201).json({ 
          token,
          user: payload.user 
        });
      }
    );

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// --- Login User ---
exports.loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // 1. Check if user exists with that email AND role
    const user = await User.findOne({ email, role });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials or role.' });
    }

    // 2. Compare the provided password with the hashed password in DB
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials or role.' });
    }

    // 3. Create and sign a JWT token (same as register)
    const payload = {
      user: {
        id: user.id,
        role: user.role,
        name: user.fullName || user.clubName
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '3d' },
      (err, token) => {
        if (err) throw err;
        // 4. Send the token and user info back
        res.json({ 
          token,
          user: payload.user 
        });
      }
    );

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
