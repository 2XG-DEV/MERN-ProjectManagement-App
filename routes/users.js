import express from "express";

import auth from "../middleware/auth.js";

import {
  checkToken,
  deleteUser,
  getPublicDetailsByUsername,
  getUser,
  loginUser,
  registerUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", auth, getUser);

router.get("/:username", auth, getPublicDetailsByUsername);

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Delete
router.delete("/delete", auth, deleteUser);

// Check if token is valid
router.post("/tokenIsValid", checkToken);

export default router;
