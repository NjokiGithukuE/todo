const express = require("express");
// const db = require("../db/db");
const todoController = require("../../../todo_controllers/todos");

const router = express.Router();

router.get('/api/v1/todos', todoController.getAllTodos);

router.post('/api/v1/todos', todoController.createTodo);

router.get('./api/v1/todos/:id', todoController.getTodo);

router.delete('./api/v1/todos', todoController.deleteTodo);

router.put('/api/v1/todos/:id', todoController.updateTodo);

module.exports = router;