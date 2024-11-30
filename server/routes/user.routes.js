import express from "express";
import {
  deleteUser,
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/user.controllers.js";
import { auth } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/profile/:id", auth, getUserProfile);
router.put("/update/:id", auth, updateUserProfile);
router.delete("/delete/:id", auth, deleteUser);

export default router;
