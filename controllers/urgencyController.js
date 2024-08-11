const asyncHandler = require("express-async-handler");
const database = require("../database/queries");

exports.createUrgencyGet = asyncHandler(async function (req, res) {
  res.send("CREATE URGENCY GET");
});

exports.createUrgencyPost = asyncHandler(async function (req, res) {
  res.send("CREATE URGENCY POST");
});

exports.readUrgencyGet = asyncHandler(async function (req, res) {
  const { categoryId } = req.params;
  const urgencies = await database.getAllUrgencyById(categoryId);
  res.render("urgencies", {
    title: categoryId === 1 ? "PROFESSIONAL" : "PERSONAL",
    categoryId: categoryId,
    urgencies: urgencies,
  });
});

exports.updateUrgencyGet = asyncHandler(async function (req, res) {
  res.send("UPDATE URGENCY GET");
});

exports.updateUrgencyPost = asyncHandler(async function (req, res) {
  res.send("UPDATE URGENCY POST");
});

exports.deleteUrgencyGet = asyncHandler(async function (req, res) {
  res.send("DELETE URGENCY GET");
});

exports.deleteUrgencyPost = asyncHandler(async function (req, res) {
  res.send("DELETE URGENCY POST");
});
