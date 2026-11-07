const express = require("express");
const validatorBook = require("./validation/book");
require("./configs/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded());


const bookModle = require("./models/books");

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

app.listen(3000, () => {
  console.log("start port 3000 server for express js");
});
