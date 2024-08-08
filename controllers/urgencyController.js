const asyncHandler = require("express-async-handler");

exports.createUrgency = asyncHandler(async function (req, res) {
  res.send("CREATE URGENCY");
});

exports.readUrgency = asyncHandler(async function (req, res) {
  res.send("READ URGENCY");
});

exports.deleteUrgency = asyncHandler(async function (req, res) {
  res.send("DELETE URGENCY");
});
