const express = require("express"); 
const validatorBook = require("../validation/book");
const mongoose = require("mongoose");
const { isValidObjectId } = require("mongoose");
const booksModle = require("../models/books");
const bookRouter = express.Router();

bookRouter.post("/", (req, res) => {
  const validation = validatorBook(req.body);
  if (validation !== true) {
    return res.status(422).json(validation);
  }
  const { name, free, price } = req.body;

  booksModle.create({ name, free, price });

  res.status(201).json({
    message: "add new book successfuly",
  });
});

bookRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (isValidObjectId(id)) {
    const deleteBook = await booksModle.findOneAndDelete({ _id: id });

    if (!deleteBook) {
      return res.status(404).json({
        message: "book not found",
      });
    } else {
      return res.status(200).json({ message: "book deleted" });
    }
  } else {
    return res.status(404).json({
      message: "BookID is not fund",
    });
  }
});

bookRouter.get("/test/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  // res.send(isValidObjectId(id));
  res.send(mongoose.Types.ObjectId.isValid(id));
});

module.exports = bookRouter;
