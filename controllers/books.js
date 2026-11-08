const validatorBook = require("../validation/book");
const { isValidObjectId } = require("mongoose");
const booksModle = require("../models/books");

exports.addBook = async (req, res) => {
  const validation = validatorBook(req.body);
  if (validation !== true) {
    return res.status(422).json(validation);
  }
  const { name, free, price } = req.body;

  booksModle.create({ name, free, price });

  res.status(201).json({
    message: "add new book successfuly",
  });
};

exports.removeBook = async (req, res) => {
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
};

exports.getAllBooks = async (req, res) => {
  const books = await booksModle.find({}).lean();
  res.json(books);
};

exports.getOneBook = async (req, res) => {
  const { id } = req.params;

  let getOneBook = null;

  if (isValidObjectId(id)) {
    getOneBook = await booksModle.findOne({ _id: id });

    if (!getOneBook) {
      return res.status(404).json({
        message: "book not found",
      });
    }
  } else {
    return res.status(404).json({
      message: "BookID is not fund",
    });
  }

  res.send(getOneBook);
};
