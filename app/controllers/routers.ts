import express from 'express'
const router = express.Router()

const routersMain = {
  index:router.get("/", function (req: any, res: any) {
    res.render('index');
  }),
  about:router.get("/sobre", function (req: any, res: any) {
    res.render("pages/about");
  }),
  contact:router.get("/contato", function (req: any, res: any) {
    res.render("pages/contact");
  }),
}
  
  
  export = {
      routersMain,
  }