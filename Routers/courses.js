const express = require("express");
const coursesRouter = express.Router();
const coursesController = require("../controllers/courses");

coursesRouter.get("/", coursesController.getAllcoures);

module.exports = coursesRouter;
