const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/name', (req, res) => {
    let name = "Guest"
    if (req.query.name){
        name = req.query.name 
    }
    res.render("index.ejs", {name: name}) 
});



app.listen(PORT, (error)=>{
    console.log(`Server started on port ${PORT}`);
});