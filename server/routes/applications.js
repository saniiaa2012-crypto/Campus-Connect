import express from 'express';
import { Application } from '../models/Application.js';
import { getDBStatus } from '../config/db.js';
import { initialApplications } from '../seed/seedData.js';

const router = express.Router();
let memoryApplications = [...initialApplications];

// GET /api/applications
router.get('/', async (req, res) => {
  try {
    if (getDBStatus()) {
      const apps = await Application.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: apps.length, data: apps });
    } else {
      return res.json({ success: true, count: memoryApplications.length, data: memoryApplications });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/applications (Submit fast application)
router.post('/', async (req, res) => {
  try {
    const appData = {
      opportunityId: req.body.opportunityId || 'opp-1',
      opportunityTitle: req.body.opportunityTitle || 'Software Engineering Intern',
      companyName: req.body.companyName || 'Campus Tech Partner',
      companyLocation: req.body.companyLocation || 'Delhi NCR',
      studentName: req.body.studentName || 'Aryan Sharma',
      rollNumber: req.body.rollNumber || '2022/CS/184',
      college: req.body.college || 'Delhi Technological University',
      email: req.body.email || 'aryan.sharma@dtu.ac.in',
      phone: req.body.phone || '+91 98765 12345',
      portfolioUrl: req.body.portfolioUrl || 'https://aryansharma.dev',
      githubUrl: req.body.githubUrl || 'https://github.com/aryansharma',
      coverNote: req.body.coverNote || 'Excited to apply for this opportunity through CampusConnect!',
      status: 'Applied',
      appliedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      timeline: [
        { stage: 'Applied', date: 'Today', done: true },
        { stage: 'Viewed', date: 'Pending', done: false },
        { stage: 'Shortlisted', date: 'Pending', done: false },
        { stage: 'Interview', date: 'Pending', done: false },
        { stage: 'Offer', date: 'Pending', done: false }
      ]
    };

    if (getDBStatus()) {
      const created = await Application.create(appData);
      return res.status(201).json({ success: true, message: 'Application submitted successfully!', data: created });
    } else {
      const newApp = { _id: `app-${Date.now()}`, ...appData };
      memoryApplications.unshift(newApp);
      return res.status(201).json({ success: true, message: 'Application submitted successfully!', data: newApp });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
