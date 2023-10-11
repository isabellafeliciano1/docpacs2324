// Import Modules
const express= require('express');
const bodyParser = require('body-parser');

// Create a new ExpressJS server
const app = express();

// Tell express to use the body parser to send Post
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    var userName = "Guest"
    if (req.query.name)
        userName = req.query.name;

    res.send(`Hello, ${userName}!`);
});

app.get('/submit', (req, res) => {
    res.sendFile(__dirname+'/form.html');
})

app.post('/submit', (req, res) => {
    console.log(req.body)
    res.send(`Got Data, ${req.body.age} ${req.body.old}`);
    if (req.body.old == "on") res.send("/image.png")
});

app.listen(3000, (err) => {
    // Error validation
    if (err) 
        console.log(err)
    else
        console.log("Server is running on port 3000")
})