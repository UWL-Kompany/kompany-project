// Import express
const express = require("express");

// Import user-controller
const userRoutes = require("../controllers/user-controller.js");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all user
router.get("/all", userRoutes.userAll);
router.get("/login", userRoutes.userLogin); // GET to get next ID
router.post("/create", userRoutes.userCreate); // POST to add new course
router.put("/user_update", userRoutes.userUpdate); // update a course
router.put("/user_delete", userRoutes.userDelete); // update a course

// Export router
module.exports = router;
