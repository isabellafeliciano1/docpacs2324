const express = require('express')
const ejs = require('ejs')
const app = express()
const path = require('path');

PORT = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

})

app.get('/log', (req, res) => {
    console.log(req.query.name);
    var name = "Guest"
    if (req.query.name) {
        name = req.query.name;
    }
    res.render('index', {name: name})
})

app.listen(PORT, () => {
    console.log(`You are currently running on port ${PORT}.`);
})
