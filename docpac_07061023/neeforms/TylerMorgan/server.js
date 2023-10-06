const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, function () {
  console.log("Server is running on port 5000 ");
});

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/", (req, res) => {
  console.log(req.body.form);
  res.send(`thing said: ${req.body.cat}`)
});

app.get("/POST", (req, res) => {
  if (req.query.futurecat == "on") {
    res.render('yes.ejs', {futurecat: 'dwayne.gif', cat: 'bjflsdjhksdvnb;sjkdvbjksdvbjksdvbshdbvsddabvsdvsdbvsdvjksbdvjkbsdvh;bsdv'})
  }
  else if (req.query.cat) {res.render('yes.ejs', { futurecat: "my baked pies", cat: req.query.cat })}
});
