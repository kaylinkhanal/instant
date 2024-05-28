const express = require("express");
const { postProduct, getListOfProducts } = require("../controllers/products");
const router = express.Router();

// Home page route.
router.get("/products", getListOfProducts );
router.post("/products", postProduct);

module.exports = router;