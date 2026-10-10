import express from 'express';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

// GET /api/stats
router.get('/', (req, res) => {
  return res.json({
    success: true,
    data: {
      partnerColleges: '120+',
      activeStudents: '18,400+',
      stipendsEarned: '₹1.4 Cr+',
      resolutionRate: '94%',
      activeListingsToday: 2480,
      verifiedEmployersPercentage: 100,
      dbStatus: getDBStatus() ? 'MongoDB Atlas Connected' : 'In-Memory Engine Ready'
    }
  });
});

export default router;
