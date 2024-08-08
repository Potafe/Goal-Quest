const asyncHandler = require("express-async-handler");

exports.createTask = asyncHandler(async function (req, res) {
  res.send("CREATE TASK");
});

exports.updateTask = asyncHandler(async function (req, res) {
  res.send("UPDATE TASK");
});

exports.readTask = asyncHandler(async function (req, res) {
  res.send("READ A TASK");
});

exports.readTasks = asyncHandler(async function (req, res) {
  res.send("READ TASKS");
});

exports.deleteTask = asyncHandler(async function (req, res) {
  res.send("DELETE A TASK");
});
