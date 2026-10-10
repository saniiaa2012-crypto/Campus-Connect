import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  author: { type: String, required: true },
  role: { type: String, default: 'Student' },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const campusFixTicketSchema = new mongoose.Schema({
  ticketId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  categoryLabel: { type: String, required: true },
  location: { type: String, required: true },
  college: { type: String, default: 'Delhi Technological University' },
  priority: { type: String, enum: ['low', 'med', 'high', 'urgent'], default: 'med' },
  priorityLabel: { type: String, default: 'Medium Priority' },
  status: { 
    type: String, 
    enum: ['Reported', 'Under Review', 'Assigned', 'In Progress', 'Resolved'], 
    default: 'Reported' 
  },
  stepNumber: { type: Number, default: 1 },
  description: { type: String, required: true },
  proofImageUrl: { type: String },
  isAnonymous: { type: Boolean, default: false },
  reporterName: { type: String, default: 'Aryan Sharma' },
  reporterRoll: { type: String, default: '2022/CS/184' },
  upvotes: { type: Number, default: 0 },
  comments: [commentSchema],
  assignedTeam: { type: String },
  progressPercentage: { type: Number, default: 0 },
  technicianNote: { type: String },
  turnaroundTime: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const CampusFixTicket = mongoose.model('CampusFixTicket', campusFixTicketSchema);
