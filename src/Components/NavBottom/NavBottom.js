import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import Adidas from "../../images/adidas.svg";
import "./NavBottom.scss";
import { getCart } from "./../../CartApi";
import memoize from "memoize-one";

class NavBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  fetchCart = memoize((version) => {
    getCart().then((data) => {
      this.setState({
        quantity: data.carts?.length ? data.carts[0].totalQuantity : 0,
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
    return (
      <div className="navBottom pt-3 pb-3">
        <Container>
          <Row>
            <Col lg={4}  xs={12} className="mb-3 mb-lg-0">
              <Row>
                <InputGroup>
                  <Button variant="outline-secondary" id="button-addon1">
                    <Image src="/images/search.svg" alt="Search" />
                  </Button>
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Row>
            </Col>
            <Col lg={3}  xs={12} className="d-flex justify-content-center mb-3 mb-md-0 d-md-none d-lg-flex">
              <Image src={Adidas} alt="adidas" className="adidas" />
            </Col>
            <Col lg={5} xs={12} className="pt-lg-2 pt-xl-3 mb-3 mb-md-0 text-center">
              <Row>
                <Col xs={4} lg={4}>
                  <a
                    href="#cart"
                    onClick={() => {
                      this.props.handleShowCart();
                    }}
                  >
                    <span>
                      <Image src="/images/cart.svg" />
                      <span className="cartCounter">{this.state.quantity}</span>
                    </span>
                    Cart
                  </a>
                </Col>
                <Col xs={4} lg={4}>
                  <a href="#wishtlist">
                    <Image src="/images/wishlist.svg" /> Wishlist
                  </a>
                </Col>
                <Col xs={4} lg={4}>
                  <a href="#login">
                    <Image src="/images/login.svg" /> Login
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NavBottom;
