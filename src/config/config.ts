import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const config = {
  PORT: process.env.PORT || "3000",
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/plock-2025",
  SESSION_SECRET: process.env.SESSION_SECRET || "your-session-secret",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
  JWT_SECRET: process.env.JWT_SECRET || "your-jwt-secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
};

export const connectToMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("MongoDB connected");
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};
