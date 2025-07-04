"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
const router = (0, express_1.Router)();
// Task routes
router.post("/", task_controller_1.createTask);
router.get("/", task_controller_1.getTasks);
router.get("/:id", task_controller_1.getTaskById);
router.put("/:id", task_controller_1.updateTask);
router.delete("/:id", task_controller_1.deleteTask);
exports.default = router;
