import express from "express";
import bodyParser from 'body-parser';
import path from 'path'
import Routers from "./controllers/routers";
import api from "./controllers/apiRouters"

const port = process.env.PORT || 3000;
const app = express();

app.set('views','app/views')
app.set("view engine", "ejs");

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")));

app.use('/' , Routers.routersMain.index)
app.use('/about' , Routers.routersMain.about)
app.use('/contact' , Routers.routersMain.contact)
app.use('/api/storagedata', api.apirouters.storageData)
app.use('/api/getdata', api.apirouters.getData)

app.listen(port);