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

router.get("/:urlTitle", (req, res) => {
  let title = req.params.urlTitle;
  let article = articlesDB.getSingleArticle(title);
  res.render("articleSingle", article);
});

router.get("/:urlTitle/edit", (req, res) => {
  let title = req.params.urlTitle;
  let article = articlesDB.getSingleArticle(title);
  res.render("editArticle", article);
});

router.post("/", (req, res) => {
  if (
    req.body.title !== "" &&
    req.body.description !== "" &&
    req.body.author !== ""
  ) {
    articlesDB.addArticle(
      req.body.title,
      req.body.description,
      req.body.author
    );
    res.render("articleIndex", {
      theArticles: articlesDB.getArticles(),
      success: "Success!"
    });
  } else {
    res.render("newArticle", {
      message: "Yikes! You are missing a title, description, or author."
    });
  }
});

router.put("/:urlTitle", (req, res) => {
  if (req.body.description !== "" && req.body.author !== "") {
    articlesDB.editArticle(
      req.body.urlTitle,
      req.body.description,
      req.body.author
    );
    res.render("articleIndex", {
      theArticles: articlesDB.getArticles(),
      success: "Success!"
    });
  } else {
    res.render("editArticle", {
      message: "Yikes! You are missing a title, description, or author."
    });
  }
});

router.delete("/:urlTitle", (req, res) => {
  if (req.body.urlTitle) {
    articlesDB.deleteArticle(req.body.urlTitle);
    res.redirect("/articles");
  } else {
    res.render("editArticle", {
      message: "Sorry, that article doesn't exist."
    });
  }
});

module.exports = router;
