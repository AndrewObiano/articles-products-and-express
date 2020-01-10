"use strict";

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const articleRoute = require("./routes/articles.js");
const productRoute = require("./routes/products.js");

const PORT = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

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
