
const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', { name: req.query.name })
});
app.get('/branch', (req, res) => {
    var name = 'Guest'
    res.send(name)
})

// Start an HTTP Listen Server
app.listen(PORT, (error) => {
    console.log(`Server started on port ${PORT}`);
});