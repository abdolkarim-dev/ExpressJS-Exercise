const express = require("express");
const validatorBook = require("./validation/book");
require("./configs/db");
const mongoose = require("mongoose");
const { isValidObjectId } = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const bookModle = require("./models/books");
const booksModle = require("./models/books");

app.post("/api/book", (req, res) => {
  const validation = validatorBook(req.body);
  if (validation !== true) {
    return res.status(422).json(validation);
  }
  const { name, free, price } = req.body;

  bookModle.create({ name, free, price });

  res.status(201).json({
    message: "add new book successfuly",
  });
});

app.delete("/api/book/:id", async (req, res) => {
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

app.get("/test/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  // res.send(isValidObjectId(id));
  res.send(mongoose.Types.ObjectId.isValid(id));
});
app.listen(3000, () => {
  console.log("start port 3000 server for express js");
});
