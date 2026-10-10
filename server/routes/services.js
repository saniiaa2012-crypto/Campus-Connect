import express from 'express';
import { Service } from '../models/Service.js';
import { getDBStatus } from '../config/db.js';
import { initialServices } from '../seed/seedData.js';

const router = express.Router();
let memoryServices = [...initialServices];

// GET /api/services
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;

    if (getDBStatus()) {
      let query = {};
      if (category && category !== 'All') query.category = category;
      if (search) query.name = { $regex: search, $options: 'i' };

      const services = await Service.find(query);
      return res.json({ success: true, count: services.length, data: services });
    } else {
      let filtered = [...memoryServices];
      if (category && category !== 'All') {
        filtered = filtered.filter(s => s.category.toLowerCase() === category.toLowerCase());
      }
      if (search) {
        filtered = filtered.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
      }
      return res.json({ success: true, count: filtered.length, data: filtered });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
