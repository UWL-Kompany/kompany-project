// Import database
const knex = require("../db");

// Retrieve all order-product
exports.orderProductsAll = async (req, res) => {
  // Get all order-product from database
  knex
    .select("*") // select all records
    .from("order-products") // from 'order-product' table
    .then((userData) => {
      // Send order-product extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving order-product: ${err}`,
      });
    });
};

// Retrieve all order-product
exports.orderProductsAllGroup = async (req, res) => {
  // Get all order-product from database
  console.log("order groups");
  knex
    .select("*") // select all records
    .from("order-products") // from 'order-product' table
    .whereIn("orderId", req.query.data)
    .then((userData) => {
      // Send order-product extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving order-product: ${err}`,
      });
    });
};

// Retrieve students for one course, based on courseId
exports.orderProductsSingle = async (req, res) => {
  // Get specific students from database
  knex
    .select("*") // select all records
    .from("order-products") // from 'students' table
    .where("userId", req.query.id)
    .then((orderProductsData) => {
      // Send students extracted from database in response
      res.json(orderProductsData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving order-products: ${err}`,
      });
    });
};

exports.orderProductsNextId = async (req, res) => {
  // get id of next order-product, incredmented later in code
  knex
    .max("id as maxId") // find max number
    .from("order-products") // from 'order-product' table
    .first()
    .then((userData) => {
      // Send order-product extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving next order-product ID: ${err}`,
      });
    });
};

// update order-product info
exports.orderProductsUpdate = async (req, res) => {
  console.log(req.body.data);
  knex("order-products")
    .where("id", req.body.data.id) // find correct record based on id
    .update(req.body.data)
    .then(() => {
      // Send order-product extracted from database in response
      res.json({
        message: `order-product: ${req.body.data.name} has been updated.`,
      });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error updating the order-product: ${err}`,
      });
    });
};

// Create new order-product
exports.orderProductsCreate = async (req, res) => {
  // Add new order-product to database
  knex("order-products")
    .insert(req.body.data)
    .then(() => {
      // Send a success message in response
      res.json({
        message: `Course \'${req.body.name}\' with id ${req.body.id} created.`,
      });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error creating ${req.body.name} : ${err}`,
      });
    });
};
