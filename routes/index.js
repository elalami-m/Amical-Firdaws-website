var express = require("express");
var router = express.Router();

/* GET home page. */
// data of the website
var data = {
  description: "Le projet al firdaws est un project contient des villa ",
  title: "Amical Al Firdaws",
  name: "Amical Firdaws",
};
router.get("/", function (req, res, next) {
  res.render("index", data);
  next();
});
router.get("/about", (req, res, next) => {
  res.render("about", data);
  next();
});
router.get("/contact", (req, res, next) => {
  res.render("contact", data);
});

module.exports = router;
