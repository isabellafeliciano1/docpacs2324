// Importing 'express' module
const {log} = require("console")
const express = require('express'); 
const path = require('path');

// make new express app 
const app = express(); 
// set the view engine to ejs
app.set('view engine', 'ejs');

const PORT = 3000; 

// start an HTTP listen server with Express
app.listen(PORT, (error)=>{
    console.log(`Server started on port ${PORT}`);
}); 


// Create endpoints
app.get('/', (req, res) => { 
    res.render('intro.ejs');
    
});

app.get('/html', (req, res) => { 
    res.sendFile(path.join(__dirname, '/text.html'));
    
});

app.get('/hello', (req, res) => { 
    if (!req.query.name) {
    res.render('index.ejs', {name: "Guest"}) 
    } else {
        res.render("index.ejs", {name: req.query.name})

    }
}) 