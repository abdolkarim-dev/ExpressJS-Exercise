const express = require("express");
const mongoose = require("mongoose");
const bookRouter = express.Router();
const bookController = require("../controllers/books");

bookRouter.post("/", bookController.addBook);

bookRouter.delete("/:id", bookController.removeBook);

bookRouter.get("/test/:id", (req, res) => {
  const { id } = req.params;

  // res.send(isValidObjectId(id));
  res.send(mongoose.Types.ObjectId.isValid(id));
});

module.exports = bookRouter;
