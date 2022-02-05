const express = require('express')
const router = express.Router()

var dat = {
    "uploads":0,
    "requests":0,
    "downloads":0,
  }

router.get("/", function (req, res) {
    res.send("teste");
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

  module.exports = {
      router,
      dat
  };