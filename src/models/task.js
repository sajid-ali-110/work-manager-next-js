const mongoose = require("mongoose");
const { Schema } = mongoose;

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  addedDate: { type: Date, default: Date.now(), required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  // endDate: { type: Date, required: true },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", TaskSchema);
