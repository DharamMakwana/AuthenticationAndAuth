const User = require("../models/User");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({ error: "Name is required!" });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password required and should be more than 6 character",
      });
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.json({ error: "This email is already been registered" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    return newUserw;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { test, registerUser };
