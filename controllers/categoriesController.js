const asyncHandler = require("express-async-handler");
const database = require("../database/queries");

exports.readCategories = asyncHandler(async function (req, res) {
  try {
    const categories = await database.getAllCategories();
    res.render("categories", { categories, title: "Categories" });
    console.log("AT CATEGORY PAGE NOW...");
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Server Error");
  }
});
