// this is the index controller for get requests to '/todos'
router.get("/", function (req, res) {
    res.render("todos/index", {
      todos: Todo.getAll(),
    });
  });