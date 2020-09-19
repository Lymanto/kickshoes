import React, { Component } from "react";
import Header from "parts/Header";
import ItemDetail from "parts/ItemDetail";
import DetailPage from "json/DetailPage.json";
export default class ItemDetails extends Component {
  render() {
    return (
      <>
        <Header />
        <ItemDetail data={DetailPage} />
      </>
    );
  }
}
