const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controllers/books");
const isAdmnMiddleware = require("../middleware/isAdmin");

bookRouter.use(isAdmnMiddleware);

bookRouter
  .route("/")
  .post(bookController.addBook)
  .get(bookController.getAllBooks);

bookRouter
  .route("/:id")
  .delete(bookController.removeBook)
  .get(bookController.getOneBook);

module.exports = bookRouter;
