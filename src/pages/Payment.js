import React, { Component } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import PaymentDetail from "parts/PaymentDetail";

export default class Payment extends Component {
  state = {
    cart: JSON.parse(localStorage.getItem("data")),
  };
  render() {
    return (
      <>
        <Header data={this.state} />

        <PaymentDetail data={this.state} />
        <Footer />
      </>
    );
  }
}
