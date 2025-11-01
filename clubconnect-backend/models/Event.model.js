// Defines the schema for Events posted by Clubs

const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  poster: { // URL to the uploaded image
    type: String, 
    default: '',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  mode: {
    type: String,
    required: true,
    enum: ['online', 'offline'],
  },
  location: { // For 'offline' mode
    type: String,
    default: '',
  },
  eventLink: { // For 'online' mode
    type: String,
    default: '',
  },
  domain: {
    type: String,
    default: 'General',
  },
  teamSize: {
    type: Number,
    default: 1,
  },
  // --- Link to the Club that created it ---
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // This links to the User model
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
