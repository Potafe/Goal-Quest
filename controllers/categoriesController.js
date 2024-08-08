const asyncHandler = require("express-async-handler");

exports.readCategories = asyncHandler(async function (req, res) {
  res.send("CATEGORIES");
});
