import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.routes.js";
import todoRoutes from "./routes/todo.routes.js";
import cookieParser from "cookie-parser";


const port = process.env.PORT || 3000;
const app = express();

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
