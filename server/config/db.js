import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.warn('⚠️ MONGODB_URI is not defined in environment variables.');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host} / Database: ${conn.connection.name}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ MongoDB Atlas Connection Error: ${error.message}`);
    console.log('ℹ️ Running backend with resilient data layer (In-memory persistent fallback ready).');
    return false;
  }
};

export const getDBStatus = () => isConnected;
