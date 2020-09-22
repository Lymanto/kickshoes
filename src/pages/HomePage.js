import React, { Component } from "react";
import Header from "parts/Header";
import ButtonCategories from "parts/ButtonCategories";
import Footer from "parts/Footer";
// import homePage from "json/HomePage.json";
import ItemCard from "parts/ItemCard";
import { connect } from "react-redux";
import { fetchHome } from "store/actions/home";
import Lottie from "react-lottie";
import Loading from "assets/json/loading-skeleton";
class HomePage extends Component {
  state = {
    search: "",
    categorySearch: "all",
    cart: JSON.parse(localStorage.getItem("data")),
  };
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
  onClickCategory = (ev) => {
    this.setState({ categorySearch: ev.target.value });
  };
  componentDidMount() {
    window.title = "Home";
    window.scrollTo(0, 0);
    if (!this.props.home.homePage)
      this.props.fetchHome(`/home-page`, "homePage");
  }
  render() {
    const { home } = this.props;
    const search = this.state.search;
    const categorySearch = this.state.categorySearch;
    const dataHomePage = {
      search,
      categorySearch,
      ...home.homePage,
    };
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Loading,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    if (!home.hasOwnProperty("homePage"))
      return (
        <>
          <Header data={this.state} />
          <section className="container py-5">
            <div className="row">
              <div className="col-3">
                <div
                  className="card w-100 p-3"
                  style={{ backgroundColor: `#fff` }}
                >
                  <Lottie options={defaultOptions} />
                </div>
              </div>
              <div className="col-3">
                <div
                  className="card w-100 p-3"
                  style={{ backgroundColor: `#fff` }}
                >
                  <Lottie options={defaultOptions} />
                </div>
              </div>
              <div className="col-3">
                <div
                  className="card w-100 p-3"
                  style={{ backgroundColor: `#fff` }}
                >
                  <Lottie options={defaultOptions} />
                </div>
              </div>
              <div className="col-3">
                <div
                  className="card w-100 p-3"
                  style={{ backgroundColor: `#fff` }}
                >
                  <Lottie options={defaultOptions} />
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      );

    return (
      <>
        <Header data={this.state} />
        <ButtonCategories
          data={dataHomePage}
          onChangeSearch={this.handleChange.bind(this)}
          onClickCategory={this.onClickCategory}
        />
        <ItemCard data={dataHomePage} />
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  home: state.home,
});
export default connect(mapStateToProps, { fetchHome })(HomePage);
