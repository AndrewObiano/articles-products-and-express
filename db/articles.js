"use strict";

let articles = [
  { title: "Article 1", description: "Description 1", author: "Name 1" },
  { title: "Article 2", description: "Description 2", author: "Name 2" },
  { title: "Article 3", description: "Description 3", author: "Name 3" }
];

function getArticles() {
  return articles;
}

function addArticle(title, description, author) {
  let newArticle = {
    title: title,
    description: description,
    author: author
  };
  articles.push(newArticle);
}

function editArticle(title, description, author) {
  for (let i = 0; i < articles.length; i++) {
    for (let key in articles) {
      if (key === title) {
        articles[i].description = description;
        articles[i].author = author;
      }
    }
  }
}

module.exports = {
  getArticles: getArticles,
  addArticle: addArticle,
  editArticle: editArticle
};
