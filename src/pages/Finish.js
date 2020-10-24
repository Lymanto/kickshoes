import React, { Component } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import FinishDetail from "parts/FinishDetail";

export default class Finish extends Component {
  state = {
    cart: JSON.parse(localStorage.getItem("data")),
  };
  render() {
    return (
      <>
        <Header data={this.state} />

        <FinishDetail data={this.state} />
        <Footer />
      </>
    );
  }
}
