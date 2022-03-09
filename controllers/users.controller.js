import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  try {
    let { email, password, passwordCheck, username, name } = req.body;
    // validate
    if (!email || !password || !passwordCheck || !name)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
    let existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });
    existingUser = await User.findOne({ username: username });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this user-name already exists." });
    if (!username) username = email;
    const salt = await bcryptjs.genSalt();
    const passwordHash = await bcryptjs.hash(password, salt);
    const newUser = new User({
      email,
      password: passwordHash,
      username,
      name,
    });
    const savedUser = await newUser.save();
    const token = jsonwebtoken.sign(
      { id: savedUser._id },
      process.env.JWT_SECRET
    );
    res.json({
      token,
      user: {
        id: savedUser._id,
        username: savedUser.username,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
    const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const getPublicDetailsByUsername = asyncHandler(async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (user) {
    res.json({ image: user.image, email: user.email, name: user.name });
  } else {
    res.status(404).json({ msg: "User not found" });
  }
});

const checkToken = asyncHandler(async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id,
  });
});

export {
  registerUser,
  deleteUser,
  loginUser,
  checkToken,
  getUser,
  getPublicDetailsByUsername,
};
