import React, { Component } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col, Image } from "react-bootstrap";
import "./ShowCart.scss";

import Product2 from "../../images/product2.png";

class ShowCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
              <li>
                <Row>
                  <Col md={4}>
                    <Image src={Product2} alt="Product" />
                  </Col>
                  <Col md={8}>
                    <p className="description">
                      lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="quantity">Quantity:1</p>
                    <Row>
                      <Col md={7}>
                        <h4 className="price">
                          9.99 <span>LE</span>
                        </h4>
                      </Col>
                      <Col md={5}>
                        <button className="remove">Remove</button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </li>
            </ul>
            <h4 className="text-center mt-4 mb-4">Total: 19.999 LE</h4>
            <Row>
              <Col md={6}>
                <button className="cart"> Review Cart</button>
              </Col>
              <Col md={6}>
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
