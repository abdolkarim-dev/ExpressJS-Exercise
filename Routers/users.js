const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/users");

userRouter.get("/", userController.getOneUser);
userRouter.get("/:id", userController.getOneUser);
// userRouter.get("/{/:id}", userController.getOneUser);

module.exports = userRouter;
