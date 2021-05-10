// Import path modules
const path = require("path");

//import local stored data files for tables
const product = require("../src/Data/products-data");
const user = require("../src/Data/user-data");
const order = require("../src/Data/order-data");
const orderProducts = require("../src/Data/order-products-data");
const payment = require("../src/Data/payment-data");
// Get the location of database.sqlite file, if nothing create one
const dbPath = path.resolve(__dirname, "db/database.sqlite");

// Create connection to SQLite database
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

// Create a table in the database called "product"
knex.schema
  // Make sure no "product" table exists
  // before trying to create new
  .hasTable("product")
  .then((exists) => {
    if (!exists) {
      // if it doesn't exist create new "product" table
      return knex.schema
        .createTable("product", (table) => {
          //table headers
          table.increments("id").primary(); // incremental id creation
          table.string("name");
          table.string("description");
          table.string("stock");
          table.string("next-stock");
          table.string("price");
          table.string("rating");
          table.string("category");
          table.string("imageUrl");
        })
        .then(() => {
          // Log success message
          console.log("Table 'product' created");
          return knex("product").insert([...product]);
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done: product");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// Create a table in the database called "product"
knex.schema
  // Make sure no "user" table exists
  // before trying to create new
  .hasTable("user")
  .then((exists) => {
    if (!exists) {
      // if it doesn't exist create new "user" table
      return knex.schema
        .createTable("user", (table) => {
          //table headers
          table.string("id").primary(); // incremental id creation
          table.string("first_name");
          table.string("last_name");
          table.string("password");
          table.string("token");
          table.string("email");
          table.string("address1");
          table.string("address2");
          table.string("address3");
          table.boolean("is_admin");
        })
        .then(() => {
          // Log success message
          console.log("Table 'user' created");
          return knex("user").insert([...user]);
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done: user");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// Create a table in the database called "product"
knex.schema
  // Make sure no "user" table exists
  // before trying to create new
  .hasTable("order")
  .then((exists) => {
    if (!exists) {
      // if it doesn't exist create new "user" table
      return knex.schema
        .createTable("order", (table) => {
          //table headers
          table.string("id").primary(); // incremental id creation
          table.string("userId");
          table.string("status");
          table.string("order_date");
          table.string("shipped_date");
          table.string("delivery_date");
        })
        .then(() => {
          // Log success message
          console.log("Table 'order' created");
          return knex("order").insert([...order]);
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done: order");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// Create a table in the database called "product"
knex.schema
  // Make sure no "user" table exists
  // before trying to create new
  .hasTable("order-products")
  .then((exists) => {
    if (!exists) {
      // if it doesn't exist create new "user" table
      return knex.schema
        .createTable("order-products", (table) => {
          //table headers
          table.string("id").primary(); // incremental id creation
          table.string("orderId");
          table.string("productId");
          table.string("quantity");
          table.string("price");
        })
        .then(() => {
          // Log success message
          console.log("Table 'order-products' created");
          return knex("order-products").insert([...orderProducts]);
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done: order-products");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// Create a table in the database called "product"
knex.schema
  // Make sure no "user" table exists
  // before trying to create new
  .hasTable("payment")
  .then((exists) => {
    if (!exists) {
      // if it doesn't exist create new "user" table
      return knex.schema
        .createTable("payment", (table) => {
          //table headers
          table.string("id").primary(); // incremental id creation
          table.string("userId");
          table.string("card_holder_name");
          table.string("long_number");
          table.string("expire_date");
          table.string("csv");
        })
        .then(() => {
          // Log success message
          console.log("Table 'payment' created");
          return knex("payment").insert([...payment]);
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done: payment");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// Just for debugging
// Log all data in "product" table
// knex
//   .select("*")
//   .from("product")
//   .then((data) => console.log("data:", data))
//   .catch((err) => console.log(err));

// Export the database
module.exports = knex;
