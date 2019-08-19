"use strict";

module.exports = () => {
  let products = [
    { title: "Product 1", body: "Description 1", author: "Name 1" },
    { title: "Product 2", body: "Description 2", author: "Name 2" },
    { title: "Product 3", body: "Description 3", author: "Name 3" }
  ];

  function getProducts() {
    return products;
  }

  function editProduct(index, title, body, author) {
    products[index] = { title: title, body: body, author: author };
  }

  return {
    getProducts: getProducts,
    editProduct: editProduct
  };
};
