import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.route.js";
import todoRoutes from "./routes/todo.route.js";
import cookieParser from "cookie-parser";


const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

app.listen(port, () => {
  console.log("Server is running on port " + port);
  connectDB();
});
