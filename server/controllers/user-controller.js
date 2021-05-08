// Import database
const knex = require("../db");

// Retrieve all user
exports.userAll = async (req, res) => {
  // Get all user from database
  knex
    .select("*") // select all records
    .from("user") // from 'user' table
    .then((userData) => {
      // Send user extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving user: ${err}` });
    });
};

exports.userLogin = async (req, res) => {
  // get id of next user, incredmented later in code
  knex
    .from("user") // from 'user' table
    .where({ email: req.query.email, password: req.query.password })
    .then((userData) => {
      // Send user extracted from database in response
      if (userData.length > 0) {
        let status = {
          success: true,
          message: "Successfully logged in",
          code: 200,
        };
        res.json({ data: userData[0], status: status });
      } else {
        let status = {
          success: false,
          message: "Login unsuccessful, username/password didn't match",
          code: 200,
        };
        res.json({ status: status });
      }
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error logging in: ${err}`,
      });
    });
};

// update user info
exports.userUpdate = async (req, res) => {
  knex("user")
    .where("id", req.body.id) // find correct record based on id
    .update({
      // data to update
      name: req.body.name,
      code: req.body.code,
      type: req.body.type,
      duration: req.body.duration,
      month: req.body.month,
      year: req.body.year,
      department: req.body.department,
    })
    .then(() => {
      // Send user extracted from database in response
      res.json({ message: `Course: ${req.body.name} has been updated.` });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error updating the user: ${err}` });
    });
};

// Create new user
exports.userCreate = async (req, res) => {
  // Add new user to database
  knex("user")
    .insert(req.body.data)
    .then(() => {
      // Send a success message in response
      res.json({
        message: `User \'${req.body.data.first_name}\' with id ${req.body.data.id} created.`,
      });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error registering ${req.body.first_name} : ${err}`,
      });
    });
};

// Remove requirements for one course
exports.userDelete = async (req, res) => {
  // Find specific requirement in the database and remove it
  console.log("deleter id: " + req.body.id);
  knex("user")
    .where("id", req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `User ${req.body.id} deleted.` });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error deleting ${req.body.id} user: ${err}`,
      });
    });
};
