// import express
const express = require("express")
//import the route
const indexRouter = require("./routes/index")
const todosRouter = require("./routes/todos")

// get request to /todos/cheese

// generate app object
const app = express()

//configure ejs
app.set("view engine", "ejs")

//routes
app.use("/", indexRouter)
app.use("/todos", todosRouter)



// tell the app to listen on port 3000
app.listen(3000, () => console.log("listening on port 3000"))