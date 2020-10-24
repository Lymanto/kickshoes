import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/bootstrap.scss";
import CartPage from "pages/CartPage";
import HomePage from "pages/HomePage";
import ItemDetails from "pages/ItemDetails";
import Finish from "pages/Finish";
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/item/:id" component={ItemDetails} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/finish" component={Finish} />
    </Router>
  );
}

export default App;
