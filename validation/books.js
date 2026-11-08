const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  free: { type: "number", positive: true, integer: true },
  name: { type: "string", min: 3, max: 255 },
  price: "number",
};

const check = v.compile(schema);

module.exports = check;
