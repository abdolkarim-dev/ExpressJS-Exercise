const mongoose = require("mongoose");

const teachersModel = mongoose.model("Teacher", {
  fullname: {
    type: String,
    required: true,
  },
});

module.exports = teachersModel;
