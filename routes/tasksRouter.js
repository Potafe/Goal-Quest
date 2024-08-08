const { Router } = require("express");
const tasksController = require("../controllers/tasksController");
const tasksRouter = Router();

tasksRouter.get("/", tasksController.readTasks);
tasksRouter.post("/", tasksController.createTask);
tasksRouter.get("/:taskId", tasksController.readTask);
tasksRouter.put("/:taskId", tasksController.updateTask);
tasksRouter.delete("/:taskId", tasksController.deleteTask);

module.exports = tasksRouter;
