const { Router } = require("express");
const categoriesController = require("../controllers/categoriesController");
const categoryRouter = Router();

categoryRouter.get("/", categoriesController.readCategories);

module.exports = categoryRouter;
