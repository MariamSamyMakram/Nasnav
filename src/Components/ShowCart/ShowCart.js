import React, { Component } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col, Image } from "react-bootstrap";
import "./ShowCart.scss";
import { getCart } from "./../../CartApi.js";
import Product2 from "../../images/product2.png";
import memoize from "memoize-one";

class ShowCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  
  fetchCart = memoize((version) => {
    getCart().then((data) => {
      this.setState({
        data: data,
      });
    });
  });

  componentDidMount() {
    this.fetchCart(this.props.cartVersion);
  }
  componentDidUpdate() {
    this.fetchCart(this.props.cartVersion);
  }

  render() {
    const products = this.state.data.carts?.length
      ? this.state.data.carts[0].products
      : [];
    const total = this.state.data.carts?.length
      ? this.state.data.carts[0].total
      : [];
    return (
      <>
        <Offcanvas
          show={this.props.show}
          onHide={this.props.handleClose}
          placement="end"
          className="showCart"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h3 className="text-center mb-4">My Cart</h3>
            <p>
              <b>Cart Summary</b>
            </p>
            <ul className="list-unstyled">
              {products.map((product) => {
                return (
                  <li key={product.id} className="pt-2 pb-2">
                    <Row>
                      <Col xs={4} md={4}>
                        <Image src={Product2} alt="Product" />
                      </Col>
                      <Col xs={8} md={8}>
                        <p className="description">{product.title}</p>
                        <p className="quantity">Quantity: {product.quantity}</p>
                        <Row>
                          <Col md={7}>
                            <h4 className="price">
                              {product.price} <span>LE</span>
                            </h4>
                          </Col>
                          <Col md={5}>
                            <button className="remove">Remove</button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-center mt-4 mb-4">Total: {total} LE</h4>
            <Row>
              <Col xs={6} md={6}>
                <button className="cart"> Review Cart</button>
              </Col>
              <Col xs={6} md={6}>
                <button className="cart">Complete Checkout</button>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

export default ShowCart;
