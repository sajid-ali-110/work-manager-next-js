import { User } from "../models/user.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "work_manager",
    });
  } catch (error) {
    console.log("failed to connect with database");
    console.error(error);
  }
};
