const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//setting view engine to ejs
app.set("view engine", "ejs");

//route for game
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/thingy.html");
});
//route for magic page
app.get("/action", function (req, res) {
    let name = "guest"
    if (req.query.name) {
        name = req.query.name
    }
});
app.post('/send', (req, res) => {
    console.log(req.body, app.use(express.bodyParser()))
})
app.listen(3000, function () {
    console.log("Server is running on port 3000 ");
})