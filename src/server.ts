const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const Routers = require("./routers/routers")
const tool1 = require('./tools/consoleUpdate')
const port = 3000;

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use('/' , Routers.router)

app.listen(port,tool1.consolreload(port,Routers.dat));