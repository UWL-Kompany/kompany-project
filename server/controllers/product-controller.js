// Import database
const knex = require("./../db");

// Retrieve all product
exports.productAll = async (req, res) => {
  // Get all product from database
  knex
    .select("*") // select all records
    .from("product") // from 'product' table
    .then((userData) => {
      // Send product extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving product: ${err}` });
    });
};

// Retrieve all product
exports.productAllGroup = async (req, res) => {
  // Get all product from database
  knex
    .select("*") // select all records
    .from("product") // from 'product' table
    .whereIn("id", req.query.data)
    .then((userData) => {
      // Send product extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving product: ${err}` });
    });
};

exports.productNextId = async (req, res) => {
  // get id of next product, incredmented later in code
  knex
    .max("id as maxId") // find max number
    .from("product") // from 'product' table
    .first()
    .then((userData) => {
      // Send product extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving next product ID: ${err}`,
      });
    });
};

// update product info
exports.productUpdate = async (req, res) => {
  console.log(req.body.data);
  knex("product")
    .where("id", req.body.data.id) // find correct record based on id
    .update(req.body.data)
    .then(() => {
      // Send product extracted from database in response
      res.json({ message: `product: ${req.body.data.name} has been updated.` });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error updating the product: ${err}` });
    });
};

// Create new product
exports.productCreate = async (req, res) => {
  // Add new product to database
  knex("product")
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
