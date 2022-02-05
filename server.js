const express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

//criando uma rota
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.get("/contato", function (req, res) {
  res.render("pages/contact");
});

//fica ouvindo a porta
app.listen(3000);

console.log("Rodando");
