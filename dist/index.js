"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
// Main application file
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://localhost:27017/task-app"; // Replace with your MongoDB connection string
app.use(express_1.default.json());
// Connect to MongoDB
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
// Use task routes
app.use("/api/tasks", task_routes_1.default);
app.get("/", (req, res) => {
    res.send("Task App Backend");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
