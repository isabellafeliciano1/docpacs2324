const express = require('express');

const bodyParser = require('body-parser')
const fs = require("fs")
var data = fs.readFileSync("data.json");

data = JSON.parse(data);

const PORT = 3000;

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/static'));

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

app.get('/edit', (req, res) => {
    res.render('form', {
        phrase: "plz fill out Bank form"
    })
});

app.get('/balance', (req, res) => {
    //if(!data[req.body.userName == ""])
    res.render('balance', {
        phrase: "balance form",
        data: data,
        userName: req.query.userName,
        pogCount: data[req.query.userName]
    })
});
app.get('/', (req, res) => {
    res.render('aList', {
        phrase: "edit pog Amount",
        data: data
    })
    fs.writeFileSync("data.json", JSON.stringify(data));
    console.log(data);
});

app.post('/submit', (req, res) => {
    console.log(req.body)
    console.log(req.body.userName)
    console.log(req.body.pogCount)
    if (!data[req.body.userName]) {
        data[req.body.userName] = Number(req.body.pogCount);
    } else {
        data[req.body.userName] += Number(req.body.pogCount);
    }
    req.query.userName = req.body.userName
    fs.writeFileSync("data.json", JSON.stringify(data));
    console.log(data);
    res.redirect(`/balance?userName=${req.body.userName}`)
});