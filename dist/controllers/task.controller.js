"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const task_model_1 = __importDefault(require("../models/task.model"));
// Create a new task
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = new task_model_1.default(req.body);
        yield task.save();
        res.status(201).json(task);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createTask = createTask;
// Get all tasks
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_model_1.default.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTasks = getTasks;
// Get a single task by ID
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_model_1.default.findById(req.params.id);
        if (task) {
            res.status(200).json(task);
        }
        else {
            res.status(404).json({ message: "Task not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTaskById = getTaskById;
// Update a task by ID
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (task) {
            res.status(200).json(task);
        }
        else {
            res.status(404).json({ message: "Task not found" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateTask = updateTask;
// Delete a task by ID
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_model_1.default.findByIdAndDelete(req.params.id);
        if (task) {
            res.status(200).json({ message: "Task deleted" });
        }
        else {
            res.status(404).json({ message: "Task not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteTask = deleteTask;
