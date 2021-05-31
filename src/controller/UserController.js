const User = require("../model/User");
const { userValidation } = require("../validation");
const bcrypt = require("bcryptjs");

const create = async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { create };
