import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // referencing User model to connect to users collection in MongoDB.
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;