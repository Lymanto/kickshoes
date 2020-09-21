import React, { Component } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import CartItem from "parts/CartItem";
import Fade from "react-reveal/Fade";
import Breadcrumb from "elements/Breadcrumb";
export default class CartPage extends Component {
  state = {
    cart: JSON.parse(localStorage.getItem("data")),
  };
  // componentDidMount() {
  // let json = null;
  // if (localStorage.getItem("data")) {
  //   json = localStorage.getItem("data");
  //   json = JSON.parse(json);
  // }
  //   this.setState({ cart: );
  // }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Shopping Cart", pageHref: "" },
    ];

    return (
      <>
        <Header data={this.state} />
        <section
          className="container"
          style={{
            backgroundColor: `#fff`,
            marginTop: 40,
            marginBottom: 40,
            borderRadius: 20,
            padding: `18px 30px`,
          }}
        >
          <Fade>
            <Breadcrumb data={breadcrumb} />
          </Fade>
          <CartItem data={this.state} />
        </section>
        <Footer />
      </>
    );
  }
}
