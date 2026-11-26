const mongoose = require("mongoose");

const coursesModel = mongoose.model("Course", {
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "Teacher",
  },
});

module.exports = coursesModel;
