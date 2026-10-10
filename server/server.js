import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB, getDBStatus } from './config/db.js';
import { seedDatabase } from './seed/seed.js';

import opportunitiesRouter from './routes/opportunities.js';
import campusFixRouter from './routes/campusfix.js';
import applicationsRouter from './routes/applications.js';
import servicesRouter from './routes/services.js';
import eventsRouter from './routes/events.js';
import statsRouter from './routes/stats.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads / assets if any
app.use('/assets', express.static(path.join(__dirname, '../public')));

// Connect to Database & Seed
connectDB().then(() => {
  seedDatabase();
});

// API Routes
app.use('/api/opportunities', opportunitiesRouter);
app.use('/api/campusfix', campusFixRouter);
app.use('/api/applications', applicationsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/stats', statsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'CampusConnect API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    database: getDBStatus() ? 'Connected to MongoDB Atlas' : 'In-Memory Engine Ready'
  });
});

// Production client static file hosting (if built)
const clientBuildPath = path.join(__dirname, '../dist');
app.use(express.static(clientBuildPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(clientBuildPath, 'index.html'), (err) => {
    if (err) {
      res.send('CampusConnect API Server is running. Frontend dev server is at http://localhost:5173');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 CampusConnect Express Backend listening on http://localhost:${PORT}`);
  console.log(`🔗 API Base: http://localhost:${PORT}/api`);
});
