const { Schema, default: mongoose, mongo } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is Required!!!1"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  about: String,
  ProfileURL: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
