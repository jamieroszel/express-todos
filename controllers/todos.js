//************************** */
// Import Dependencies
//************************** */
// Import our todo model
const Todo = require("../models/todo")


//************************** */
// Controller Functions
//************************** */

// Index function for getting all todos and rendering view
const index = (req, res) => {
    res.render("todos/index", {
        todos: Todo.getAll(),
        time: req.time
    })
}

// Show function for getting one todo and rendering view
const show = (req, res) => {
    //return the template todos/show.ejs
    res.render("todos/show", {
        todo: Todo.getOne(req.params.id),
        todoNum: parseInt(req.params.id) + 1
    })

}

// newTodo(new) function for rendering new todo form
function newTodo (req, res){
    res.render(`todos/new`)
}

// create function for creating a new todo and redirecting to index
function create(req, res){
    console.log(req.body)
    req.body.done = false
    Todo.create(req.body)
    res.redirect('/todos')
}

// deleteTodo(delete) function for deleting a todo and redirecting to index
function deleteTodo(req, res){
    Todo.deleteOne(req.params.id);
    res.redirect('/todos')
}

//************************** */
// Export Controller
//************************** */

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo
}