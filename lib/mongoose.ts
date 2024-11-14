import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Ensure MONGODB_URI is defined in environment variables
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

// Global variable to hold the mongoose connection for reuse in dev mode
let cached = global.mongoose;

// Check if we already have a cached connection
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  // If there's an existing connection, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If no connection exists, start the connection process
  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Creating a new connection promise
    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  // Save the resolved promise to the cached connection
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
