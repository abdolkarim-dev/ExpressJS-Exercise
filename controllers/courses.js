const coursesModel = require('../models/courses')

exports.getAllcoures = async (req, res) => {
  const coures = await coursesModel.find({}).lean();
  res.json(coures);
};