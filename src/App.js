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
      </Switch>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
