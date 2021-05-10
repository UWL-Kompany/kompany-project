// Import express
const express = require("express");

// Import order-controller
const orderRoutes = require("../controllers/order-controller.js");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all order
router.get("/all", orderRoutes.orderAll);
router.get("/single", orderRoutes.orderSingle);
router.get("/next_id", orderRoutes.orderNextId); // GET to get next ID
router.post("/create", orderRoutes.orderCreate); // POST to add new course
router.put("/order_update", orderRoutes.orderUpdate); // update a course

// Export router
module.exports = router;
