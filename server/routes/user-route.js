// Import express
const express = require("express");

// Import user-controller
const userRoutes = require("../controllers/user-controller.js");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all user
router.get("/all", userRoutes.userAll); // for admin use
router.get("/login", userRoutes.userLogin); // user login to account
router.post("/create", userRoutes.userCreate); // POST to add new user
router.put("/user_update", userRoutes.userUpdate); // update a user
router.put("/user_delete", userRoutes.userDelete); // delete a user

// Export router
module.exports = router;
