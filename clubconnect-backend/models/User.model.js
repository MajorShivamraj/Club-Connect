// Defines the schema for Users (Students, Clubs, Teachers)

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'club', 'teacher'],
  },
  // Role-specific optional fields
  clubName: {
    type: String,
    default: '',
  },
  department: {
    type: String,
    default: '',
  },
  // --- Gamification Fields (for Students) ---
  points: {
    type: Number,
    default: 0,
  },
  badges: {
    type: [String],
    default: [], // e.g., ["first_event", "tech_whiz"]
  },
}, { timestamps: true }); // Adds createdAt and updatedAt

// --- Password Hashing Middleware ---
// This runs *before* a user is saved
UserSchema.pre('save', async function(next) {
  // Only hash the password if it's new or has been modified
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// --- Password Comparison Method ---
// This adds a custom method to all User documents
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
