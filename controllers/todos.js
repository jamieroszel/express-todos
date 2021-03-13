// Import our todo model
const Todo = require("../models/todo")


// This is our index controller for get requests to "/todos"
const index = (req, res) => {
    res.render("todos/index", {
        todos: Todo.getAll(),
        time: req.time
    })
}

const show = (req, res) => {
    //return the template todos/show.ejs
    res.render("todos/show", {
        todo: Todo.getOne(req.params.id),
        todoNum: parseInt(req.params.id) + 1
    })

}

function newTodo (req, res){
    res.render(`todos/new`)
}

function create(req, res){
    console.log(req.body)
    req.body.done = false
    Todo.create(req.body)
    res.redirect('/todos')
}

function deleteTodo(req, res){
    Todo.deleteOne(req.params.id);
    res.redirect('/todos')
}

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo
}