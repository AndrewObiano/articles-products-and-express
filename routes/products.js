const express = require("express");
const router = express.Router();
// const articlesDB = require("./db/articles.js");

router.get("/", (req, res) => {
  //   res.render("Here are some Articles", { articles: articlesDB.getArticles() });
  res.render("links", { links: "i am now in /products" });
});

// router.post("/", (req, res) => {
// //   articles.push(req.title);
// //   res.send(articles);
// });

router.put("/", (req, res) => {});

module.exports = router;
