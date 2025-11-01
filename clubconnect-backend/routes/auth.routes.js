// Defines the API endpoints for /api/auth

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// @route   POST /api/auth/register
// @desc    Register a new user (student, club, or teacher)
// @access  Public
router.post('/register', authController.registerUser);

// @route   POST /api/auth/login
// @desc    Login a user and get a token
// @access  Public
router.post('/login', authController.loginUser);

module.exports = router;
