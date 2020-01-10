"use strict";

const express = require("express");
const router = express.Router();
const productsDB = require("../db/products.js");

router.get("/", (req, res) => {
  res.render("productIndex", { theProducts: productsDB.getProducts() });
});

router.get("/new", (req, res) => {
  res.render("newProduct");
});

router.get("/:id", (req, res) => {
  let rpd = req.params.id;
  let product = productsDB.getSingleProduct(rpd);
  res.render("productSingle", product);
});

router.get("/:id/edit", (req, res) => {
  let rpd = req.params.id;
  let product = productsDB.getSingleProduct(rpd);
  res.render("editProduct", product);
});

router.post("/", (req, res) => {
  if (
    req.body.name !== "" &&
    req.body.price !== "" &&
    req.body.inventory !== ""
  ) {
    productsDB.addProduct(req.body.name, req.body.price, req.body.inventory);
    res.render("productIndex", {
      theProducts: productsDB.getProducts(),
      success: "Success!"
    });
  } else {
    res.render("newProduct", {
      message: "Yikes! You are missing a name, price, or inventory count."
    });
  }
});

router.put("/:id", (req, res) => {
  if (
    req.body.name !== "" &&
    req.body.price !== "" &&
    req.body.inventory !== ""
  ) {
    productsDB.editProduct(
      req.body.name,
      req.body.price,
      req.body.inventory,
      req.body.id
    );
    res.render("productIndex", {
      theProducts: productsDB.getProducts(),
      success: "Success!"
    });
  } else {
    res.render("editProduct", {
      message: "Try again. You are missing a name, price, or description."
    });
  }
});

router.delete("/:id", (req, res) => {
  if (req.body.id) {
    productsDB.deleteProduct(req.body.id);
    res.redirect("/products");
  } else {
    res.render("editProduct", {
      message: "Sorry, that product doesn't exist."
    });
  }
});

module.exports = router;
