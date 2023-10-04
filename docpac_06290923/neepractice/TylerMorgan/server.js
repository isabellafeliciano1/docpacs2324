// Requiring module
const { log } = require("console");
const express = require("express");

const path = require("path");
const ejs = require("ejs");
const app = express();


// Creating express object
app.set('view engine', 'ejs');

// Handling GET request
app.get('/', (req, res) => {
    if (!req.query.name) {
        res.render("index.ejs", {name: "H"})
    }
    else {res.render('index.ejs', {name: req.query.name})}
});


// Port Number
const port = 4000;
app.listen(port, (error) => {
    console.log(`Server started on port ${port}`);
});