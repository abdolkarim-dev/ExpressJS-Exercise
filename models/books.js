const mongoose = require("mongoose");

const booksModle = mongoose.model("books", {
  name: {
    type: String, 
    required: true,
  },
  free: {
    type: Number,
    required: false,
    default: 1,
  },
  price: {
    type: Number, 
    required: true,
  },
});

module.exports = booksModle;
