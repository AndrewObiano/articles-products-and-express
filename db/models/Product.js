const bookshelf = require("../bookshelf");

class Product extends bookshelf.Model {
  get tableName() {
    return "products";
  }
  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model("Product", Product);
