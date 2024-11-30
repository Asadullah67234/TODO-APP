import User from "../Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async(req, res) => {
  const { name, email, password } = req.body;
  try {
      if (!name || !email || !password ) {
          return res.status(400).json({ message: "All fields are required" });
      }
      if (password.length < 6) {
          return res.status(400).json({ message: "Password must be at least 6 characters" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      return res.status(201).json({ message: "User registered successfully", success : true, user });
  } catch (error) {
      return res.status(500).json({ message: error.message, success : false });
    }
}



export const loginUser = async(req, res) => {
  const { email, password } = req.body;
  try {
      if (!email || !password) {
          return res.status(400).json({ message: "All fields are required" });
      }
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: "Invalid Email or Password" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ message: "Invalid Email or Password" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true });
      return res.status(200).json({ message: "Login successful", success : true , user });
  } catch (error) {
      return res.status(500).json({ message: error.message, success : false });
  }
}


export const logoutUser = async(_, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful", success : true });
}


export const getUserProfile = async(req, res) => {
  try {
      const userId = req.params.id 
      const user = await User.findById(userId).select("-password");
          
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "User profile", success : true, user });
  } catch (error) {
      return res.status(500).json({ message: error.message, success : false });
  }
}


export const updateUserProfile = async(req, res) => {
  try {
      const userId = req.params.id;
      const { name, email, password } = req.body;
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      if (password) {
          const hashedPassword = await bcrypt.hash(password, 10);
          user.password = hashedPassword;
      }
      user.name = name;
      user.email = email;
      await user.save();
      return res.status(200).json({ message: "User profile updated", success : true, user });
  } catch (error) {
      return res.status(500).json({ message: error.message, success : false });
  }
}

export const deleteUser = async(req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "User deleted", success : true });
  } catch (error) {
      return res.status(500).json({ message: error.message, success : false });
  }
}