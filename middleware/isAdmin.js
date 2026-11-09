const userModle = require("../models/users");

module.exports = async (req, res, next) => {
  const { id } = req.body;
  const user = await userModle.findOne({ _id: id });

  if (user) {
    if (user.role === "Admin") {
      return next();
    } else {
      return res.status(403).json({ message: "user is not allowed" });
    }
  } else {
    return res.status(404).json({ message: "user not found" });
  }
};
