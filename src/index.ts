import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/task.routes";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Main application file

const app: Application = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI as string;
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Use task routes
app.use("/api/tasks", taskRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Task App Backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
