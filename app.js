const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
require("./configs/db");

const bookModle = require("./models/books");


app.post("/api/book", (req, res) => {
  const { name, free, price } = req.body;
  if (name === "" || price == "") {
    res.status(422).json({
      message: "data is not valid",
    });
  } else {
    bookModle.create({name, free, price});
    res.status(201).json({
      message: "add new book successfuly",
    });
  }
});

app.listen(3000, () => {
  console.log("start port 3000 server for express js");
});
