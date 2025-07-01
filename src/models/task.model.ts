import mongoose, { Document, Schema } from "mongoose";
import { ITask } from "../interfaces/task.interface";

export interface ITaskDocument extends ITask, Document {}

const TaskSchema: Schema = new Schema(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);
TaskSchema.index({ completed: 1 });

export default mongoose.model<ITaskDocument>("Task", TaskSchema);
