const Todo = require('../models/todoModel');

const todoController = {
  getAll: async (req, res) => {
    try {
      const todos = Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addTodo: async (req, res) => {
    try {
      const newTodo = await Todo.create({
        name: req.body.name,
      });
    } catch (error) {}
  },
};

module.exports = todoController;
