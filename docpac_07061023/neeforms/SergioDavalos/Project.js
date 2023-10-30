const { log } = require("console");
const express = require('express');
const path = require('path');

const app = express();



app.set('view engine','ejs');

app.listen(3000, (err) => {
    //error validation 
    if (err)
        console.log(err);
    else
        console.log("Server is running on port 3000")
});

app.get('/', (req, res) => {
    res.render('Yaa.ejs');
});

app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, '/Comp.html'));
});

app.post('/submit', (req,res) => {
    console.log(req.body);
    res.render('submit.ejs', {nameInput: "username", checkedBox: 'on'});
   
})

