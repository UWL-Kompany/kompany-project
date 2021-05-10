// Import express
const express = require("express");

// Import payment-controller
const paymentRoutes = require("../controllers/payment-controller.js");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all payment
router.get("/all", paymentRoutes.paymentAll);
router.get("/next_id", paymentRoutes.paymentNextId); // GET to get next ID
router.post("/create", paymentRoutes.paymentCreate); // POST to add new course
router.put("/payment_update", paymentRoutes.paymentUpdate); // update a course

// Export router
module.exports = router;
