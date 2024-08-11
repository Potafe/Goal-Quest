const asyncHandler = require("express-async-handler");
const database = require("../database/queries");

exports.createTaskGet = asyncHandler(async function (req, res) {
  res.send("CREATE TASK GET");
});

exports.createTaskPost = asyncHandler(async function (req, res) {
  res.send("CREATE TASK POST");
});

exports.updateTaskGet = asyncHandler(async function (req, res) {
  res.send("UPDATE TASK GET");
});

exports.updateTaskPost = asyncHandler(async function (req, res) {
  res.send("UPDATE TASK POST");
});

exports.readTask = asyncHandler(async function (req, res) {
  res.send("READ A TASK GET");
});

exports.readTasks = asyncHandler(async function (req, res) {
  const categoryId = parseInt(req.params.categoryId, 10);
  const urgencyId = parseInt(req.params.urgencyId, 10);

  console.log("Category ID:", categoryId);
  console.log("Urgency ID:", urgencyId);

  const tasks = await database.getTasks(categoryId, urgencyId);

  res.render("task", {
    title: "TASKS",
    categoryId: categoryId,
    tasks: tasks,
  });
});

exports.deleteTaskGet = asyncHandler(async function (req, res) {
  res.send("DELETE A TASK GET");
});

exports.deleteTaskPost = asyncHandler(async function (req, res) {
  res.send("DELETE A TASK POST");
});
