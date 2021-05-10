// Import database
const knex = require("../db");

// Retrieve all order
exports.orderAll = async (req, res) => {
  // Get all order from database
  knex
    .select("*") // select all records
    .from("order") // from 'order' table
    .then((userData) => {
      // Send order extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving order: ${err}` });
    });
};

// Retrieve students for one course, based on courseId
exports.orderSingle = async (req, res) => {
  // Get specific students from database
  console.log("user id: " + req.query.id);
  knex
    .select("*") // select all records
    .from("order") // from 'students' table
    .where("userId", req.query.id)
    .then((orderData) => {
      // Send students extracted from database in response
      res.json(orderData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving orders: ${err}`,
      });
    });
};

exports.orderNextId = async (req, res) => {
  // get id of next order, incredmented later in code
  knex
    .max("id as maxId") // find max number
    .from("order") // from 'order' table
    .first()
    .then((userData) => {
      // Send order extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving next order ID: ${err}`,
      });
    });
};

// update order info
exports.orderUpdate = async (req, res) => {
  console.log(req.body.data);
  knex("order")
    .where("id", req.body.data.id) // find correct record based on id
    .update(req.body.data)
    .then(() => {
      // Send order extracted from database in response
      res.json({ message: `order: ${req.body.data.name} has been updated.` });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error updating the order: ${err}` });
    });
};

// Create new order
exports.orderCreate = async (req, res) => {
  // Add new order to database
  knex("order")
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
