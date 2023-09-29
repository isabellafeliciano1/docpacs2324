const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('root.ejs')

});

app.get('/query', (req, res) => {
    if (!req.query.name) { res.render('index.ejs', { name: 'Guest' }) }
    else { res.render('index.ejs', { name: req.query.name }) }

});


// Start an HTTP Listen Server
app.listen(PORT, (error) => {
    console.log(`Server started on port ${PORT}`);
});