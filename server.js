// Require Modules
const express = require('express');

// Create the Express App
const app = express();


// Configure the App (app.set)

// We'll use the ejs view engine
app.set('view engine', 'ejs'); 

// Mount Middleware (app.use)


// Mount Routes
app.get('/', function(req, res) {
    res.render('index');
});


// Tell the App to Listen on Port 3000
app.listen(3000, function() {
    console.log('Express is listening on port 3000');
});