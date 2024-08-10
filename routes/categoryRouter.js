const { Router } = require("express");
const categoriesController = require("../controllers/categoriesController");
const categoryRouter = Router();

const tasksController = require("../controllers/tasksController");
const urgencyController = require("../controllers/urgencyController");

categoryRouter.get("/", categoriesController.readCategories);

categoryRouter.get(
  "/:categoryId/urgencies/create",
  urgencyController.createUrgencyGet
);
categoryRouter.post(
  "/:categoryId/urgencies/create",
  urgencyController.createUrgencyPost
);

categoryRouter.get("/:categoryId/urgencies", urgencyController.readUrgencyGet);

categoryRouter.get(
  "/:categoryId/urgencies/:urgencyId/update",
  urgencyController.updateUrgencyGet
);
categoryRouter.post(
  "/:categoryId/urgencies/:urgencyId/update",
  urgencyController.updateUrgencyPost
);

categoryRouter.get(
  "/:categoryId/urgencies/:urgencyId/delete",
  urgencyController.deleteUrgencyGet
);
categoryRouter.post(
  "/:categoryId/urgencies/:urgencyId/delete",
  urgencyController.deleteUrgencyPost
);

categoryRouter.get(
  "/:categoryId/urgencies/:urgencyId/tasks/create",
  tasksController.createTaskGet
);
categoryRouter.post(
  "/:categoryId/urgencies/:urgencyId/tasks/create",
  tasksController.createTaskPost
);

categoryRouter.get(
  "/:categoryId/urgenies/:urgencyId/tasks",
  tasksController.readTasks
);
categoryRouter.get(
  "/:categoryId/urgencies/:urgencyId/tasks/:taskId",
  tasksController.readTask
);

categoryRouter.get(
  "/:categoryId/urgencies/:urgencyId/tasks/:taskId/update",
  tasksController.updateTaskGet
);
categoryRouter.post(
  "/:categoryId/urgencies/:urgencyId/tasks/:taskId/update",
  tasksController.updateTaskPost
);

categoryRouter.get(
  "/:categoryId/urgencies/:urgencyId/tasks/:taskId/delete",
  tasksController.deleteTaskGet
);
categoryRouter.post(
  "/:categoryId/urgencies/:urgencyId/tasks/:taskId/delete",
  tasksController.deleteTaskPost
);

module.exports = categoryRouter;
