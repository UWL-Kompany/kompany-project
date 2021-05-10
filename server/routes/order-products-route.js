// Import express
const express = require("express");

// Import product-controller
const orderProductsRoutes = require("../controllers/order-products-controller.js");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all product
router.get("/all", orderProductsRoutes.orderProductsAll);
router.get("/all_group", orderProductsRoutes.orderProductsAllGroup);
router.get("/next_id", orderProductsRoutes.orderProductsNextId); // GET to get next ID
router.post("/create", orderProductsRoutes.orderProductsCreate); // POST to add new course
router.put("/order_products_update", orderProductsRoutes.orderProductsUpdate); // update a course

// Export router
module.exports = router;
