const express = require("express");
const router = express.Router();
// require the Todo model
const Todo = require("../models/todo");
router.get("/", function (req, res) {
  res.render("todos/index", {
    todos: Todo.getAll(),
  });
});
module.exports = router;