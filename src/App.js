import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// screens
import Home from "./Views/Home";
import Products from "./Views/Products";
import Product from "./Views/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
