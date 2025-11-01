// Defines the API endpoints for /api/events

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');
const { authMiddleware, roleCheck } = require('../middleware/auth.middleware');

// @route   POST /api/events
// @desc    Create a new event
// @access  Private (Only 'club' users)
router.post(
  '/', 
  [authMiddleware, roleCheck(['club'])], // Protect this route
  eventController.createEvent
);

// @route   GET /api/events
// @desc    Get all upcoming events
// @access  Public (or Private for any logged-in user)
router.get('/', authMiddleware, eventController.getAllEvents);

// @route   GET /api/events/:id
// @desc    Get a single event by its ID
// @access  Public (or Private)
router.get('/:id', authMiddleware, eventController.getEventById);

// --- Student Registration Routes ---
// @route   POST /api/events/register/:eventId
// @desc    Register the logged-in student for an event
// @access  Private (Only 'student')
router.post(
  '/register/:eventId',
  [authMiddleware, roleCheck(['student'])],
  eventController.registerForEvent
);

// @route   GET /api/events/my-events
// @desc    Get all events the logged-in student is registered for
// @access  Private (Only 'student')
router.get(
  '/my-events',
  [authMiddleware, roleCheck(['student'])],
  eventController.getMyRegisteredEvents
);

module.exports = router;
