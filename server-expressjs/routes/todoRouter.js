const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router.get("/", todoController.getAll);
router.post("/", todoController.addTodo);
router.put("/:id", todoController.updateTodo);

module.exports = router;
