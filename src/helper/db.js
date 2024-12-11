import { User } from "../models/user.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "work_manager",
    });

    const uuser = new User({
      name: "sajid test",
      email: "test@gmail.com",
      password: "test",
      about: "about testing",
    });
    await uuser.save();
    console.log("user is created");
    console.log("db connected. ...");
    console.log(connection);
  } catch (error) {
    console.log("failed to connect with database");
    console.error(error);
  }
};
