import express from 'express';
import { Event } from '../models/Event.js';
import { getDBStatus } from '../config/db.js';
import { initialEvents } from '../seed/seedData.js';

const router = express.Router();
let memoryEvents = [...initialEvents];

// GET /api/events
router.get('/', async (req, res) => {
  try {
    if (getDBStatus()) {
      const events = await Event.find();
      return res.json({ success: true, count: events.length, data: events });
    } else {
      return res.json({ success: true, count: memoryEvents.length, data: memoryEvents });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/events/:id/register
router.post('/:id/register', async (req, res) => {
  try {
    if (getDBStatus()) {
      const event = await Event.findById(req.params.id);
      if (!event) return res.status(404).json({ success: false, message: 'Event not found' });
      event.isRegistered = true;
      event.registeredCount += 1;
      await event.save();
      return res.json({ success: true, message: 'Registered for event!', data: event });
    } else {
      const event = memoryEvents.find(e => e._id === req.params.id);
      if (!event) return res.status(404).json({ success: false, message: 'Event not found' });
      event.isRegistered = true;
      event.registeredCount += 1;
      return res.json({ success: true, message: 'Registered for event!', data: event });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
