const express = require("express");
const Routers = require("./routers/routers")
const port = 3000;

const tool1 = require('./tools/consoleUpdate')

var app = express();
var dat = {
  "uploads":0,
  "requests":0,
  "downloads":0,
}
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use('/' , Routers.router)
//fica ouvindo a porta
app.listen(port,tool1.consolreload(port,Routers.dat));

