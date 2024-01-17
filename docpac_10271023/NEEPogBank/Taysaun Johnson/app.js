const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs')
var data = fs.readFileSync("data.json")
data = JSON.parse(data)

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('list', {data : data})
})

app.get('/edit', (req, res) => {
    res.render('form')
})

app.get('/balance', (req, res) => {
    var userName = req.query.user
    var pogAmount = data[userName]
    res.render(`balance`, {
        userName : userName,
        pogAmount : pogAmount
    })
})

app.post('/submit', (req, res) => {
    var userName = req.body.userName
    var pogAmount = Number(req.body.pogAmount)
    if (userName in data) {
        data[userName] += pogAmount
        fs.writeFileSync("data.json", JSON.stringify(data))
    } else {
        data[userName] = pogAmount
        fs.writeFileSync("data.json", JSON.stringify(data))
    }
    res.redirect(`/balance?user=${userName}`);
})

const PORT = 1000
app.listen(PORT, (err) => {
    if (err){
        console.log(err)
    } else {
        console.log(`Server running on port ${PORT}`)
    }
})