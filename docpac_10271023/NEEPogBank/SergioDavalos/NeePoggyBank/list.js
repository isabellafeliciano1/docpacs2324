const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var data = fs.readFileSync("data.json");
data = JSON.parse(data);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const PORT = 3000;
let form = true;
let salute = ""
let username = undefined;
let pogAmount = undefined;
let name = undefined;


app.listen(PORT, (req, res) => {
    console.log(`Server started on ${PORT}`);
});

app.get('/', (req, res) => {
    res.render("list", { data })
});

app.get('/edit', (req, res) => {
    let form = true;
    res.render("form", { form, salute })
});

app.get('/balance', (req, res) => {
    let username = undefined;
    if (data[req.query.username] == 0) {
        data[req.query.username] += 1;
        fs.writeFileSync("data.json", JSON.stringify(data));
    }
    if (req.query.username && data[req.query.username]) {
        pogAmount = data[req.query.username];
        username = req.query.username;
    } else {
        username = 'none'
    };
    res.render("balance", { username, pogAmount });
});

app.post('/submit', (req, res) => {
    username = req.body.username;
    pogAmount = Number(req.body.pogAmount);
    if (username in data) {
        data[username] += (pogAmount);
    }
    else { data[username] = Number(pogAmount); }
    fs.writeFileSync("data.json", JSON.stringify(data));
    console.log(req.body);
    res.redirect('/balance?username=' + username)
})