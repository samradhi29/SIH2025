import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("Please define the MONGO_URL environment variable");
}

let isConnected = false;

export const dbconnect = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URL, {
      dbName: 'SIH',
    
    });

    isConnected = true;  

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};
