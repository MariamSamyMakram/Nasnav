import React, { Component } from "react";
import BreadcrumbYeshtery from "./BreadcrumbYeshtery/BreadcrumbYeshtery";
import Menu from "./Menu/Menu";
import NavBottom from "./NavBottom/NavBottom";
import ProductInfo from "./ProductInfo/ProductInfo";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import { getProduct } from "./../ProductApi.js";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    getProduct(55).then((data) => {
      this.setState({ product: data });
    });
  }

  render() {
    return (
      <>
        <NavBottom handleShowCart={this.props.handleShowCart} cartVersion={this.props.cartVersion} />
        <Menu />
        <BreadcrumbYeshtery />
        <ProductInfo
          product={this.state.product}
          navBottomVersion={this.state.navBottomVersion}
          cartVersion={this.props.cartVersion} changeVersion={this.props.changeVersion}
        />
        {this.state.product.category ? (
          <SimilarProducts category={this.state.product.category} />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Product;
