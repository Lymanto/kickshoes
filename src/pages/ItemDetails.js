import React, { Component } from "react";
import Header from "parts/Header";
import ItemDetail from "parts/ItemDetail";
import Recommend from "parts/Recommend";
// import DetailPage from "json/DetailPage.json";
import Breadcrumb from "elements/Breadcrumb";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { fetchHome } from "store/actions/home";
import { v4 as uuidv4 } from "uuid";
class ItemDetails extends Component {
  state = {
    size: null,
    name: null,
    price: null,
    rate: null,
    image: null,
    cart: JSON.parse(localStorage.getItem("data")),
  };
  onClickSize = (ev) => {
    this.setState({
      _id: uuidv4(),
      size: ev.target.value,
      name: this.props.home[this.props.match.params.id].item.name,
      price: this.props.home[this.props.match.params.id].item.price,
      rate: this.props.home[this.props.match.params.id].item.rate,
      image: this.props.home[this.props.match.params.id].item.image,
    });
  };
  onClickCart = () => {
    const oldproduct = localStorage.getItem("data")
      ? localStorage.getItem("data")
      : "[]";
    const arrayproduct = JSON.parse(oldproduct);
    // let productsString = data.products;
    let products = this.state;

    arrayproduct.push(products);
    // if (productsString) {
    // products = JSON.parse(productsString);
    // }

    localStorage.setItem("data", JSON.stringify(arrayproduct));
    // let data = [];
    // if (!localStorage.getItem("data")) {
    //   data.push(JSON.stringify([this.state]));
    // } else {
    //   data = [localStorage.getItem("data")];
    //   data.push(JSON.stringify([this.state]));
    // }
    // localStorage.setItem("data", data);
    window.location.href = "/cart";
  };
  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
    if (!this.props.home[this.props.match.params.id]) {
      this.props.fetchHome(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
    }
  }
  render() {
    const { home, match } = this.props;
    if (!home[match.params.id]) return null;
    const size = this.state.size;
    const dataItemDetail = {
      ...home[match.params.id],
      size,
    };
    const breadcrumb = [
      {
        pageTitle: "Home",
        pageHref: "",
      },
      {
        pageTitle: "Detail Item",
        pageHref: "",
      },
    ];
    return (
      <>
        <Header data={this.state} />
        <section
          className="container"
          style={{
            backgroundColor: `#fff`,
            marginTop: 40,
            borderRadius: 20,
            padding: `18px 30px`,
          }}
        >
          <Fade>
            <Breadcrumb data={breadcrumb} />
          </Fade>
          <ItemDetail
            data={dataItemDetail}
            onClickSize={this.onClickSize}
            onClickCart={this.onClickCart}
          />
        </section>
        <Recommend data={dataItemDetail} />
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  home: state.home,
});
export default connect(mapStateToProps, { fetchHome })(ItemDetails);
