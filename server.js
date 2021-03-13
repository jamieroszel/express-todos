//************************** */
// IMPORTING DEPENDENCIES
//************************** */

// import express
const express = require("express")

//import the route
const indexRouter = require("./routes/index")
const todosRouter = require("./routes/todos")

// import Morgan
 const morgan = require('morgan')

//************************** */
// Create Application Object
//************************** */

// generate app object
const app = express()

//************************** */
// Set View Engine
//************************** */

//configure ejs
app.set("view engine", "ejs")

//************************** */
// Middleware
//************************** */
//************************** */
// custom middleware for getting current time
app.use((req, rest, next) => {
  console.log('Hello, intrepid learner')
  // add a time property to the request object
  req.time = new Date().toLocaleTimeString()
  console.log(req.time)
  // go to the next middleware function
  next()
})

// morgan for logging
app.use(morgan('dev'))
//urlencoded in order to receive data from forms
app.use(express.urlencoded({extended:false}))
// serves the public folder as static
app.use(express.static('public'))


// Routing
//************************** */
//routes
app.use("/", indexRouter)
app.use("/todos", todosRouter)
//************************** */
// Listener
//************************** */
// tell the app to listen on port 3000
app.listen(3000, () => console.log("listening on port 3000"))