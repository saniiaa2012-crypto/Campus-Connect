import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  opportunityId: { type: String, required: true },
  opportunityTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  companyLocation: { type: String },
  studentName: { type: String, required: true },
  rollNumber: { type: String, required: true },
  college: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  portfolioUrl: { type: String },
  githubUrl: { type: String },
  coverNote: { type: String },
  status: { 
    type: String, 
    enum: ['Applied', 'Viewed', 'Shortlisted', 'Interview', 'Offer', 'Rejected'], 
    default: 'Applied' 
  },
  appliedDate: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) },
  interviewDetails: {
    scheduledAt: { type: String },
    interviewer: { type: String },
    platform: { type: String },
    meetLink: { type: String }
  },
  timeline: [
    {
      stage: { type: String },
      date: { type: String },
      done: { type: Boolean, default: false }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

export const Application = mongoose.model('Application', applicationSchema);
