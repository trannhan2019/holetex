const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      default: 'Medium',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);
