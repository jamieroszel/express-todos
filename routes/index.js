// import express
const express = require("express")
// create a new router
const router = express.Router()

// routes
router.get("/", (req, res) => {
    res.render("index")
})



//export the route
module.exports = router