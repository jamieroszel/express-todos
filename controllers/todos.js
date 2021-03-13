// Import our todo model
const Todo = require("../models/todo")

// This is our index controller for get requests to "/todos"
const index = (req, res) => {
    res.render("todos/index", {
        todos: Todo.getAll()
    })
}

const show = (req, res) => {
    //return the template todos/show.ejs
    res.render("todos/show", {
        todo: Todo.getOne(req.params.id),
        todoNum: parseInt(req.params.id) + 1
    })
}

module.exports = {
    index
}