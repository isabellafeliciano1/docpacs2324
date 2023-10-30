const express = require('express');
const path = require('path');
const ejs = require('ejs')

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
});



app.get('/POST', (req, res) => {
    if (req.query.uses == "on") { res.render('Goteem.ejs', { uses: '/amogus.png', us: "No Work :(" }) }
    else if (req.query.us) { res.render('Goteem.ejs', { uses: "hi", us: req.query.us }) }
});

app.listen(PORT, (error) => {
    console.log(`Server started on port ${PORT}`)
});