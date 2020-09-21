import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/bootstrap.scss";
import CartPage from "pages/CartPage";
import HomePage from "pages/HomePage";
import ItemDetails from "pages/ItemDetails";
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/item/:id" component={ItemDetails} />
      <Route path="/cart" component={CartPage} />
    </Router>
  );
}

export default App;
