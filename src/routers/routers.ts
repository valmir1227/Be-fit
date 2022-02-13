const express = require('express')
const storage = require('../tools/Pseud-database-storage')
const router = express.Router()
const pathStorage = 'src/data/'


  var dat = {
    "uploads":0,
    "requests":0,
    "downloads":0,
  }

  var obj = {table:[]}

  router.get("/", function (req, res) {
    res.send(data);
    dat.requests += 1
  });
  
  router.get("/sobre", function (req, res) {
    res.render("pages/about");
    dat.requests += 1
  });
  
  router.get("/contato", function (req, res) {
    res.render("pages/contact");
    dat.requests += 1
  });

  router.post("/api/storagedata", (req,res) =>{

    const nam = req.body.name
    const maill = req.body.email
    const surname = req.body.surname
    const phonNumber = req.body.phonNumber

    storage.storageData(obj,pathStorage+ 'data2.json', {
        "name":nam,
        "email":maill,
        "surnm":surname,
        "phone_number":phonNumber
    }, () => {
      res.send(true)
    });
   

  });

  router.get("/api/getdata", (req,res) => {
    
  })
  module.exports = {
      router,
      dat
  };