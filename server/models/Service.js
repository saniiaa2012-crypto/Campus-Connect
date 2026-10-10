import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  distance: { type: String, required: true },
  rating: { type: Number, default: 4.8 },
  reviewsCount: { type: Number, default: 45 },
  discountBadge: { type: String, required: true },
  phone: { type: String, default: '+91 98765 43210' },
  whatsapp: { type: String, default: '919876543210' },
  location: { type: String, required: true },
  image: { type: String },
  turnaround: { type: String },
  pricing: { type: String },
  verified: { type: Boolean, default: true }
});

export const Service = mongoose.model('Service', serviceSchema);
