const express = require("express");
const routes = express.Router();

const DefaultController = require("./controllers/DefaultController");
const ProductController = require("./controllers/ProductController");

// Default
routes.get("/", DefaultController.index);

// Products
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
