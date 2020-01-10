const Product = require("./models/Product");
const Article = require("./models/Article");

module.exports = function(req, res, next) {
  req.db = {
    Product: Product,
    Article: Article
  };

  next();
};
