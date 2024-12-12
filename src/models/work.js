const mongoose = require("mongoose");
const { Schema } = mongoose;

export const workSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true }, // New field
  endDate: { type: Date, required: true }, // New field
});

export const Work = mongoose.models.Work || mongoose.model("Work", workSchema);
