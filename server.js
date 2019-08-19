"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const articleRoute = require("./routes/articles.js");
const productRoute = require("./routes/products.js");

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("links");
});

app.use("/articles", articleRoute);
app.use("/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
