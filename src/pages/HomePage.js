import React, { Component } from "react";
import Header from "parts/Header";
import ButtonCategories from "parts/ButtonCategories";
import Footer from "parts/Footer";
import homePage from "json/HomePage.json";
import ItemCard from "parts/ItemCard";

export default class HomePage extends Component {
  state = {
    search: "",
    categorySearch: "all",
  };
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
  onClickCategory = (ev) => {
    this.setState({ categorySearch: ev.target.value });
  };
  componentDidMount() {
    window.title = "Home";
    window.scrollTo(0, 0);
  }
  render() {
    const search = this.state.search;
    const categorySearch = this.state.categorySearch;
    const dataHomePage = {
      ...homePage,
      search,
      categorySearch,
    };
    return (
      <>
        <Header />
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
