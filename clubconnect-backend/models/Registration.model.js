// This schema links Students to Events

const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['registered', 'attended', 'absent'],
    default: 'registered',
  },
  // You could add team details here if teamSize > 1
}, { timestamps: true });

// Ensure a student can only register once for an event
RegistrationSchema.index({ event: 1, student: 1 }, { unique: true });

module.exports = mongoose.model('Registration', RegistrationSchema);
