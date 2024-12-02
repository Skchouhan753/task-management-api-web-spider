const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxlength: 100 },
    description: { type: String },
    status: { type: String, enum: ["TODO", "IN_PROGRESS", "COMPLETED"] },
    priority: { String, enum: ["LOW", "MEDIUM", "HIGH"] },
    dueDate: { type: Date, default: Date.now },
    createdAttype: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const taskModel = mongoose.model("tasks", taskSchema);

module.exports = {
  taskModel,
};
