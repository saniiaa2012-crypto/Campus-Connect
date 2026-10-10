import express from 'express';
import { CampusFixTicket } from '../models/CampusFixTicket.js';
import { getDBStatus } from '../config/db.js';
import { initialCampusFixTickets } from '../seed/seedData.js';

const router = express.Router();
let memoryTickets = [...initialCampusFixTickets];

// GET /api/campusfix
router.get('/', async (req, res) => {
  try {
    const { status, college, category } = req.query;

    if (getDBStatus()) {
      let query = {};
      if (status && status !== 'All Issues') query.status = status;
      if (college && college !== 'All Campuses') query.college = { $regex: college, $options: 'i' };
      if (category) query.category = category;

      const tickets = await CampusFixTicket.find(query).sort({ upvotes: -1, createdAt: -1 });
      return res.json({ success: true, count: tickets.length, data: tickets });
    } else {
      let filtered = [...memoryTickets];
      if (status && status !== 'All Issues') {
        filtered = filtered.filter(t => t.status === status);
      }
      if (category) {
        filtered = filtered.filter(t => t.category === category);
      }
      filtered.sort((a, b) => b.upvotes - a.upvotes);
      return res.json({ success: true, count: filtered.length, data: filtered });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/campusfix (Submit ticket)
router.post('/', async (req, res) => {
  try {
    const ticketId = `CF-${Math.floor(1000 + Math.random() * 9000)}`;
    const categoryMap = {
      infra: 'Classroom Infrastructure',
      wifi: 'Wi-Fi & Network Issues',
      hostel: 'Hostel & Mess Amenities',
      clean: 'Cleanliness & Washrooms',
      water: 'Water Coolers & Facilities',
      lib: 'Central Library Facilities',
      lab: 'Lab Equipment & Instruments',
      parking: 'Campus Parking & Transit'
    };

    const priorityLabelMap = {
      low: 'Low Priority',
      med: 'Medium Priority',
      high: 'High Priority',
      urgent: 'Urgent / Critical'
    };

    const ticketData = {
      ticketId,
      title: req.body.title,
      category: req.body.category || 'infra',
      categoryLabel: categoryMap[req.body.category] || 'Campus Infrastructure',
      location: req.body.location,
      college: req.body.college || 'Delhi Technological University',
      priority: req.body.priority || 'med',
      priorityLabel: priorityLabelMap[req.body.priority] || 'Medium Priority',
      status: 'Reported',
      stepNumber: 1,
      description: req.body.description || 'Reported via CampusFix portal.',
      proofImageUrl: req.body.proofImageUrl || '',
      isAnonymous: Boolean(req.body.isAnonymous),
      reporterName: req.body.isAnonymous ? 'Anonymous Student' : (req.body.reporterName || 'Aryan Sharma'),
      reporterRoll: req.body.reporterRoll || '2022/CS/184',
      upvotes: 1,
      assignedTeam: 'Estate Facilities Desk',
      progressPercentage: 20,
      technicianNote: 'Ticket logged. Scheduled for initial review by estate officer.',
      turnaroundTime: 'ETA: 12 hrs',
      comments: []
    };

    if (getDBStatus()) {
      const created = await CampusFixTicket.create(ticketData);
      return res.status(201).json({ success: true, message: `Issue logged successfully! Assigned Ticket #${ticketId}`, data: created });
    } else {
      const newTicket = { _id: `cf-${Date.now()}`, ...ticketData, createdAt: new Date() };
      memoryTickets.unshift(newTicket);
      return res.status(201).json({ success: true, message: `Issue logged successfully! Assigned Ticket #${ticketId}`, data: newTicket });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/campusfix/:id/upvote
router.post('/:id/upvote', async (req, res) => {
  try {
    if (getDBStatus()) {
      const ticket = await CampusFixTicket.findById(req.params.id);
      if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found' });
      ticket.upvotes += 1;
      await ticket.save();
      return res.json({ success: true, upvotes: ticket.upvotes });
    } else {
      const ticket = memoryTickets.find(t => t._id === req.params.id);
      if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found' });
      ticket.upvotes += 1;
      return res.json({ success: true, upvotes: ticket.upvotes });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/campusfix/:id/comment
router.post('/:id/comment', async (req, res) => {
  try {
    const { text, author, role } = req.body;
    const commentObj = { author: author || 'Aryan Sharma', role: role || 'Student', text, timestamp: new Date() };

    if (getDBStatus()) {
      const ticket = await CampusFixTicket.findById(req.params.id);
      if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found' });
      ticket.comments.push(commentObj);
      await ticket.save();
      return res.json({ success: true, data: ticket.comments });
    } else {
      const ticket = memoryTickets.find(t => t._id === req.params.id);
      if (!ticket) return res.status(404).json({ success: false, message: 'Ticket not found' });
      ticket.comments.push(commentObj);
      return res.json({ success: true, data: ticket.comments });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
