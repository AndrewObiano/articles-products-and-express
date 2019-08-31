"use strict";

let articles = [
  {
    title: "Memory of Thanatos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus nobis debitis delectus unde iure velit sapiente, dolorum corporis ipsam quisquam deleniti, perspiciatis eaque ducimus beatae consequatur voluptatibus animi iusto. Sequi ut quos eveniet a cum ab saepe sapiente? Totam dolorem unde fugit at. Optio expedita, neque suscipit sed quam impedit autem!",
    author: "James Brown"
  },
  {
    title: "Lady Solace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil cupiditate explicabo quis, vero harum ullam unde eaque repellat magni culpa sit pariatur obcaecati? Tenetur sequi architecto nam quis repellat.",
    author: "Notorious B.I.G."
  },
  {
    title: "Baroness of Retribution",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos est corrupti ad explicabo commodi alias numquam consequuntur eius placeat deleniti, quo repellat omnis eum, sit voluptatum, nostrum deserunt tenetur quis. Deserunt distinctio temporibus odio voluptate repudiandae quos quis molestiae voluptates, doloremque facilis itaque eum fugiat? Accusantium quo magnam fugiat numquam, veritatis est? Maxime, incidunt beatae commodi a voluptatem dignissimos laborum fugiat, quod minus, vero aut temporibus architecto quisquam ipsa! Voluptas libero aliquam quis aperiam!",
    author: "Frank Sinatra"
  }
];

for (let i = 0; i < articles.length; i++) {
  articles[i].urlTitle = articles[i].title.replace(/ /gi, "-");
}

function getArticles() {
  return articles;
}

function getSingleArticle(name) {
  let elementName = "";
  articles.forEach(element => {
    if (element.urlTitle == name) {
      elementName = element;
    }
  });

  return elementName;
}

function addArticle(title, description, author) {
  let newArticle = {
    title: title,
    description: description,
    author: author,
    urlTitle: title.replace(/ /gi, "-")
  };
  articles.push(newArticle);
}

function editArticle(title, description, author) {
  articles.forEach(element => {
    if (element.urlTitle === title) {
      element.description = description;
      element.author = author;
    }
  });
}

function deleteArticle(title) {
  articles.forEach(element => {
    if (element.urlTitle === title) {
      articles.splice(articles.indexOf(element), 1);
    }
  });
}

module.exports = {
  getArticles: getArticles,
  getSingleArticle: getSingleArticle,
  addArticle: addArticle,
  editArticle: editArticle,
  deleteArticle: deleteArticle
};
