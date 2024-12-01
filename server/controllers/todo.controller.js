import Todo from "../Models/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      description: req.body.description,
    });
    return res.status(201).json({
      message: "Todo created successfully",
      success: true,
      todo,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      message: "Todos fetched successfully",
      success: true,
      todos,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todo.title = req.body.title;
    todo.description = req.body.description;
    await todo.save();
    return res.status(200).json({
      message: "Todo updated successfully",
      success: true,
      todo,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    return res.status(200).json({
      message: "Todo deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
