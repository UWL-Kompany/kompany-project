// Import express
const express = require("express");

// Import product-controller
const productRoutes = require("./../controllers/product-controller.js");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all product
router.get("/all", productRoutes.productAll);
router.get("/next_id", productRoutes.productNextId); // GET to get next ID
router.post("/create", productRoutes.productCreate); // POST to add new course
router.put("/course_update", productRoutes.productUpdate); // update a course

// Export router
module.exports = router;
