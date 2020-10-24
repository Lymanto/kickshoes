import React, { Component } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import FinishDetail from "parts/FinishDetail";
import Fade from "react-reveal/Fade";
export default class Finish extends Component {
  state = {
    cart: JSON.parse(localStorage.getItem("data")),
  };

  render() {
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
          <FinishDetail data={this.state} />
        </section>
        <Footer />
      </>
    );
  }
}
