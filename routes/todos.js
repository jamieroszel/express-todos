//************************** */
// Create a New Router
//************************** */
const express = require("express")
const router = express.Router();

//************************** */
// Import Model
//************************** */
const todosCtrl = require("../controllers/todos")

//************************** */
// Routes
//************************** */
// get request to /todos
router.get("/", todosCtrl.index)
// get request to /todos/new
router.get("/new", todosCtrl.new)
// get request to /todos/1, /todos/2, etc.
router.get("/:id", todosCtrl.show)
// post request to /todos/
router.post("/", todosCtrl.create)
// delete request to /todos/:id
router.delete("/:id", todosCtrl.delete)

//************************** */
// Export Router
//************************** */

module.exports = router;