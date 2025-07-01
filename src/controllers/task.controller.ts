import { Request, Response } from "express";
import Task, { ITaskDocument } from "../models/task.model";
import { ITask } from "../interfaces/task.interface";

// Create a new task
export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITaskDocument = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tasks
export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: ITaskDocument[] = await Task.find();
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single task by ID
export const getTaskById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITaskDocument | null = await Task.findById(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update a task by ID
export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITaskDocument | null = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task by ID
export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITaskDocument | null = await Task.findByIdAndDelete(
      req.params.id
    );
    if (task) {
      res.status(200).json({ message: "Task deleted" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
