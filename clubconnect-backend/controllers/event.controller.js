// This is the logic for creating and viewing events.

const Event = require('../models/Event.model');
const Registration = require('../models/Registration.model');
const User = require('../models/User.model');

// --- Create Event (for Clubs) ---
exports.createEvent = async (req, res) => {
  // Get all event data from the request body
  const { 
    eventName, description, startDate, endDate, 
    mode, location, eventLink, domain, teamSize 
  } = req.body;

  // Get the club's ID from the auth middleware
  const createdBy = req.user.id; 

  try {
    const newEvent = new Event({
      eventName,
      description,
      startDate,
      endDate,
      mode,
      location,
      eventLink,
      domain,
      teamSize,
      createdBy // Link the event to the club that's logged in
    });

    const event = await newEvent.save();
    res.status(201).json(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// --- Get All Events (for Students/Teachers) ---
exports.getAllEvents = async (req, res) => {
  try {
    // Find all events and sort them by date (newest first)
    // Also, populate 'createdBy' to get club info
    const events = await Event.find()
      .populate('createdBy', 'clubName') // Replaces createdBy ID with User doc (only clubName)
      .sort({ startDate: 1 }); // 1 = ascending (upcoming first)
      
    res.json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// --- Get Single Event by ID ---
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('createdBy', 'clubName');
      
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// --- Register for Event (for Students) ---
exports.registerForEvent = async (req, res) => {
  const eventId = req.params.eventId;
  const studentId = req.user.id; // From auth middleware

  try {
    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if already registered
    let registration = await Registration.findOne({ event: eventId, student: studentId });
    if (registration) {
      return res.status(400).json({ message: 'You are already registered for this event' });
    }

    // Create new registration
    registration = new Registration({
      event: eventId,
      student: studentId
    });

    await registration.save();
    
    // --- Gamification ---
    // Award points for registering
    await User.findByIdAndUpdate(studentId, { $inc: { points: 10 } });

    res.status(201).json({ message: 'Registered successfully!' });

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// --- Get My Registered Events (for Students) ---
exports.getMyRegisteredEvents = async (req, res) => {
  const studentId = req.user.id;
  try {
    // Find all registrations for this student
    const registrations = await Registration.find({ student: studentId })
      .populate({ // Nested populate
        path: 'event',
        populate: {
          path: 'createdBy',
          select: 'clubName'
        }
      });
      
    // Extract just the event details
    const myEvents = registrations.map(reg => reg.event);
    
    res.json(myEvents);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
