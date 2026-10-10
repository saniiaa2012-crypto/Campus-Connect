import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organizer: { type: String, required: true },
  venue: { type: String, required: true },
  date: { type: String, required: true },
  dayTag: { type: String, default: 'SAT' },
  dateNum: { type: String, default: '05' },
  time: { type: String, required: true },
  category: { type: String, default: 'Hackathon' },
  prizePool: { type: String },
  isRegistered: { type: Boolean, default: false },
  registeredCount: { type: Number, default: 120 },
  image: { type: String },
  badgeText: { type: String, default: 'Registered' }
});

export const Event = mongoose.model('Event', eventSchema);
