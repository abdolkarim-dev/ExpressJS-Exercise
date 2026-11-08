const mongoose = require("mongoose");

const usersModle = mongoose.model("users", {
  name: {
    type: String,
    required: true,
  },
  username: {
    type: Number,
    required: false,
  },
  crime: {
    type: Number,
    required: true,
    default: 1,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
    default: "User",
  },
  password: {
    type: Number,
    required: true,
  } 
});

module.exports = usersModle;
