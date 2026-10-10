import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  companyLogoText: { type: String, default: 'BE' },
  companyLogoBg: { type: String, default: 'bg-surface-container-high text-primary' },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  mode: { type: String, enum: ['Remote', 'Hybrid', 'On-site'], default: 'Hybrid' },
  type: { type: String, enum: ['Internships', 'Part-time', 'Campus Jobs', 'Micro Projects'], default: 'Internships' },
  stipend: { type: Number, required: true },
  stipendPeriod: { type: String, default: '/ mo' },
  stipendLabel: { type: String, default: 'Fixed Monthly Stipend' },
  tags: [{ type: String }],
  applicantsCount: { type: Number, default: 0 },
  deadline: { type: String },
  verified: { type: Boolean, default: true },
  fastHiring: { type: Boolean, default: false },
  gradientBorder: { type: String, default: 'from-primary to-primary-container' },
  description: { type: String },
  requirements: [{ type: String }],
  perks: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export const Opportunity = mongoose.model('Opportunity', opportunitySchema);
