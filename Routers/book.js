const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controllers/books");

bookRouter
  .route("/")
  .post(bookController.addBook)
  .get(bookController.getAllBooks);

bookRouter.delete("/:id", bookController.removeBook);

module.exports = bookRouter;
