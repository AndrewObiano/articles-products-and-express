"use strict";

let products = [
  {
    name: "Supreme x LV Leather Baseball Jacket (Red) ",
    price: "12000",
    inventory: "3",
    id: "1"
  },
  {
    name: "Nike MAG Back to the Future (2016)",
    price: "36254",
    inventory: "8",
    id: "2"
  },
  {
    name: "Rolex Daytona 116595RBOW",
    price: "157000",
    inventory: "4",
    id: "3"
  }
];

function getProducts() {
  return products;
}

function getSingleProduct(target) {
  let elementName = "";
  products.forEach(element => {
    if (element.id == target) {
      elementName = element;
    }
  });

  return elementName;
}

function addProduct(name, price, inventory) {
  let newID;

  for (let i = 0; i < products.length; i++) {
    newID = (parseInt(products[i].id) + 1).toString();
  }

  let newProduct = {
    name: name,
    price: price,
    inventory: inventory,
    id: newID
  };
  products.push(newProduct);
}

function editProduct(name, price, inventory, id) {
  products.forEach(element => {
    if (element.id === id) {
      element.name = name;
      element.price = price;
      element.inventory = inventory;
    }
  });
}

function deleteProduct(name) {
  products.forEach(element => {
    if (element.name === name) {
      products.splice(products.indexOf(element), 1);
    }
  });
}

module.exports = {
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
  addProduct: addProduct,
  editProduct: editProduct,
  deleteProduct: deleteProduct
};
