const { Router } = require("express");
const urgencyController = require("../controllers/urgencyController");
const urgencyRoute = Router();

urgencyRoute.get("/", urgencyController.readUrgency);
urgencyRoute.post("/", urgencyController.createUrgency);
urgencyRoute.delete("/:urgencyId", urgencyController.deleteUrgency);

module.exports = urgencyRoute;
