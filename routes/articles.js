"use strict";

const express = require("express");
const router = express.Router();
const articlesDB = require("../db/articles.js");

router.get("/", (req, res) => {
  res.render("articleIndex", { theArticles: articlesDB.getArticles() });
});

router.get("/new", (req, res) => {
  res.render("newArticle");
});

router.get("/:title", (req, res) => {
  console.log(req.params);
  res.render("articleSingle");
});

router.post("/", (req, res) => {
  articlesDB.addArticle(req.body.title, req.body.description, req.body.author);

  res.render("articleIndex", { theArticles: articlesDB.getArticles() });
});

router.put("/:title", (req, res) => {
  articlesDB.editArticle(req.body.title, req.body.description, req.body.author);

  res.render("editArticle");
});

module.exports = router;
