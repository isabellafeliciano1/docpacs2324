const express = require("express"),
    app = express();

//setting view engine to ejs
app.set("view engine", "ejs");

//route for game
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/game.html");
});
//route for magic page
app.get("/guest", function (req, res) {
    let name = "guest"
    if (req.query.name) {
        name = req.query.name
    }
    console.log(name)
    res.render("magic",{name});
});

app.listen(8080, function () {
    console.log("Server is running on port 8080 ");
})