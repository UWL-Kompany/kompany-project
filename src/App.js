import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import {
  toggleAccountLogin,
  changeDetails,
} from "./Redux/Actions/accountActions";

// screens
import Home from "./Views/Home";
import Products from "./Views/Products";
import Product from "./Views/Product";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Checkout from "./Views/Checkout";
import Account from "./Views/Account";
import About from "./Views/About";
import MyDetails from "./Views/MyDetails";
import Orders from "./Views/Orders";
import Order from "./Views/Order";
import Compare from "./Views/Compare";

// admin pages
import Admin from "./Views/Admin";
import AdminDb from "./Views/AdminDb";
import AdminUsers from "./Views/AdminUsers";
//import AdminDb from "./Views/AdminDb";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("login status: " + login.toString());
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      forceNextScreen("");
      dispatch(toggleAccountLogin(true));
    } else {
      forceNextScreen("login");
    }
  }, []);

  const forceNextScreen = (screen) => {
    history.push("/" + screen);
  };

  return (
    <div className="App">
      {/* <Router> */}
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/edit_details">
          <MyDetails />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/compare">
          <Compare />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/adminDb">
          <AdminDb />
        </Route>
        <Route exact path="/adminUsers">
          <AdminUsers />
        </Route>
      </Switch>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
