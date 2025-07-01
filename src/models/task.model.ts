import mongoose, { Document, Schema } from "mongoose";
import { ITask } from "../interfaces/task.interface";

export interface ITaskDocument extends ITask, Document {}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<ITaskDocument>("Task", TaskSchema);
