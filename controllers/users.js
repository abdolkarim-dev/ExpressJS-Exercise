const validatoruser = require("../validation/users");
const { isValidObjectId } = require("mongoose");
const usersModle = require("../models/users");

exports.getOneUser = async (req, res) => {
  if (req.params.id) {
    const { id } = req.params;

    let getOneuser = null;

    if (isValidObjectId(id)) {
      getOneuser = await usersModle.findOne({ _id: id });

      if (!getOneuser) {
        return res.status(404).json({
          message: "user not found",
        });
      }
    } else {
      return res.status(404).json({
        message: "userID is not fund",
      });
    }

    res.send(getOneuser);
  } else {
    const getuser = await usersModle.find({});
    res.send(getuser);
  }
};
