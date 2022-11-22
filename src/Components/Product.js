import React, { Component } from "react";
import BreadcrumbYeshtery from "./BreadcrumbYeshtery/BreadcrumbYeshtery";
import Menu from "./Menu/Menu";
import NavBottom from "./NavBottom/NavBottom";
import ProductInfo from "./ProductInfo/ProductInfo";
import SimilarProducts from "./SimilarProducts/SimilarProducts";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/products/55")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          product: data,
        })
      );
  }
  render() {
    return (
      <>
        <NavBottom handleShowCart={this.props.handleShowCart} />
        <Menu />
        <BreadcrumbYeshtery />
        <ProductInfo product={this.state.product} />
        {this.state.product.category?(<SimilarProducts category={this.state.product.category} />):''}
      </>
    );
  }
}

export default Product;
