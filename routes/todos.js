const express = require("express")
const router = express.Router();
const todosCtrl = require("../controllers/todos")

// routes
// get request to /todos
router.get("/", todosCtrl.index)
// get request to /todos/1, /todos/2, etc.
router.get("/:id", todosCtrl.show)



module.exports = router;