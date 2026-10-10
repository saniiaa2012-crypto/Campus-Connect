import express from 'express';
import { Opportunity } from '../models/Opportunity.js';
import { getDBStatus } from '../config/db.js';
import { initialOpportunities } from '../seed/seedData.js';

const router = express.Router();

// Memory store fallback
let memoryOpportunities = [...initialOpportunities];

// GET /api/opportunities
router.get('/', async (req, res) => {
  try {
    const { search, location, mode, minStipend, skill, type, sort } = req.query;

    if (getDBStatus()) {
      let query = {};

      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { company: { $regex: search, $options: 'i' } },
          { tags: { $regex: search, $options: 'i' } }
        ];
      }

      if (location && location !== 'All India') {
        query.location = { $regex: location, $options: 'i' };
      }

      if (mode && mode !== 'Any Mode') {
        query.mode = { $regex: mode, $options: 'i' };
      }

      if (minStipend) {
        query.stipend = { $gte: Number(minStipend) };
      }

      if (skill && skill !== 'All Skills') {
        query.tags = { $regex: skill, $options: 'i' };
      }

      if (type && type !== 'All Roles') {
        query.type = type;
      }

      let sortOption = { createdAt: -1 };
      if (sort === 'Highest Stipend') sortOption = { stipend: -1 };
      if (sort === 'Fewest Applicants') sortOption = { applicantsCount: 1 };

      const opportunities = await Opportunity.find(query).sort(sortOption);
      return res.json({ success: true, count: opportunities.length, data: opportunities });
    } else {
      // Filter in memory
      let filtered = [...memoryOpportunities];

      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(o => 
          o.title.toLowerCase().includes(s) || 
          o.company.toLowerCase().includes(s) || 
          o.tags.some(t => t.toLowerCase().includes(s))
        );
      }

      if (location && location !== 'All India') {
        filtered = filtered.filter(o => o.location.toLowerCase().includes(location.toLowerCase()));
      }

      if (mode && mode !== 'Any Mode') {
        filtered = filtered.filter(o => o.mode.toLowerCase().includes(mode.toLowerCase()));
      }

      if (minStipend) {
        filtered = filtered.filter(o => o.stipend >= Number(minStipend));
      }

      if (type && type !== 'All Roles') {
        filtered = filtered.filter(o => o.type === type);
      }

      return res.json({ success: true, count: filtered.length, data: filtered });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/opportunities/:id
router.get('/:id', async (req, res) => {
  try {
    if (getDBStatus()) {
      const opportunity = await Opportunity.findById(req.params.id);
      if (!opportunity) return res.status(404).json({ success: false, message: 'Opportunity not found' });
      return res.json({ success: true, data: opportunity });
    } else {
      const opp = memoryOpportunities.find(o => o._id === req.params.id);
      if (!opp) return res.status(404).json({ success: false, message: 'Opportunity not found' });
      return res.json({ success: true, data: opp });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/opportunities
router.post('/', async (req, res) => {
  try {
    const newOppData = {
      title: req.body.title || 'Campus Ambassador',
      company: req.body.company || 'CampusConnect Hiring',
      companyLogoText: req.body.company ? req.body.company.substring(0, 2).toUpperCase() : 'CC',
      companyLogoBg: 'bg-primary-container text-on-primary-container',
      location: req.body.location || 'Delhi NCR',
      duration: req.body.duration || '3 Months',
      mode: req.body.mode || 'Hybrid',
      type: req.body.type || 'Internships',
      stipend: req.body.stipend ? Number(req.body.stipend) : 10000,
      stipendPeriod: '/ mo',
      stipendLabel: 'Fixed Monthly Stipend',
      tags: req.body.tags ? req.body.tags.split(',').map(t => t.trim()) : ['Campus', 'Growth'],
      applicantsCount: 1,
      deadline: '7 days left',
      verified: true,
      fastHiring: true,
      description: req.body.description || 'Exciting opportunity for campus students.',
      requirements: ['Student ID required'],
      perks: ['Certificate', 'PPO Opportunity']
    };

    if (getDBStatus()) {
      const created = await Opportunity.create(newOppData);
      return res.status(201).json({ success: true, message: 'Opportunity posted successfully!', data: created });
    } else {
      const newOpp = { _id: `opp-${Date.now()}`, ...newOppData };
      memoryOpportunities.unshift(newOpp);
      return res.status(201).json({ success: true, message: 'Opportunity posted successfully!', data: newOpp });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
