//************************** */
// Create New Router
//************************** */
// import express
const express = require("express")
// create a new router
const router = express.Router()

//************************** */
// Routes
//************************** */

// routes
router.get("/", (req, res) => {
    res.render("index")
})

//************************** */
// Export Router
//************************** */

//export the route
module.exports = router