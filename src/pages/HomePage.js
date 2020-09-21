import React, { Component } from "react";
import Header from "parts/Header";
import ButtonCategories from "parts/ButtonCategories";
import Footer from "parts/Footer";
// import homePage from "json/HomePage.json";
import ItemCard from "parts/ItemCard";
import { connect } from "react-redux";
import { fetchHome } from "store/actions/home";
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
    if (!home.hasOwnProperty("homePage")) return null;

    const search = this.state.search;
    const categorySearch = this.state.categorySearch;
    const dataHomePage = {
      search,
      categorySearch,
      ...home.homePage,
    };
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
