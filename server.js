//************************** */
// IMPORTING DEPENDENCIES
//************************** */

// import express
const express = require("express")
//import the route
const indexRouter = require("./routes/index")
const todosRouter = require("./routes/todos")
// import morgan
const morgan = require("morgan")
// import method-override
const methodOverride = require("method-override")

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
// custom middle ware for getting current time
app.use((req, res, next) => {
    // Logging some text
    console.log("Hello Intrepid Learner")
    //add a time property to the request object
    req.time = new Date().toLocaleTimeString()
    // go to next middleware function
    next()
})
// morgan for logging
app.use(morgan("dev"))
// urlecoded into order to receive data from forms
app.use(express.urlencoded({extended: false}))
// serves the public folder as static
app.use(express.static("public"))
// enable method override
app.use(methodOverride("_method"))


//************************** */
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