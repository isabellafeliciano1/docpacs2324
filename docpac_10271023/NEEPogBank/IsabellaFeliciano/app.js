const express = require("express")
const bodyparser = require("body-parser")
const fs = require('fs');
const { log } = require("console");
const app = express() 
const port = 3000;

var data = fs.readFileSync("data.json");
data = JSON.parse(data);

app.use(express.urlencoded({ extended : true }))
app.use(express.static('public'))
app.set("view engine", "ejs")

app.get('/', (req, res) => {

    

    res.render("list")
});

app.get('/balance', (req, res) => {

    let userName = req.body.userName
    let pogAmount = req.body.pogAmount

    res.render("balance", { userName, pogAmount })
});

app.get('/edit', (req, res) => {
    res.render("form")
});

app.post('/submit', (req, res) => {

    let userName = req.body.userName
    let pogAmount = req.body.pogAmount

    if (userName) console.log(userName);

    fs.writeFileSync("data.json", JSON.stringify(data));

    res.render('balance.ejs', { userName, pogAmount });
});

app.listen(port, () => {
    console.log(`Server started on port 3000`);
});