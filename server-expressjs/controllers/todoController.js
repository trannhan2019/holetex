const Todo = require("../models/todoModel");

const todoController = {
  getAll: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addTodo: async (req, res) => {
    console.log(req);
    try {
      const newTodo = await Todo.create({
        name: req.body.name,
        priority: req.body.priority,
        completed: false,
      });
      res.status(200).json(newTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateTodo: async (req, res) => {
    try {
      const id = req.params.id;

      res.status(200).json(id);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = todoController;
