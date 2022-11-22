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

class NavBottom extends Component {
  render() {
    return (
      <div className="navBottom pt-3 pb-3">
        <Container>
          <Row>
            <Col lg={4}>
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
            <Col lg={4} className="d-flex justify-content-center">
              <Image src={Adidas} alt="adidas" className="adidas" />
            </Col>
            <Col lg={4} className="pt-lg-3">
              <Row>
                <Col lg={4}>
                  <a href="#" onClick={this.props.handleShowCart}>
                    <span>
                      <Image src="/images/cart.svg" />
                      <span className="cartCounter">0</span>
                    </span>
                    Cart
                  </a>
                </Col>
                <Col lg={4}>
                  <a href="#">
                    <Image src="/images/wishlist.svg" /> Wishlist
                  </a>
                </Col>
                <Col lg={4}>
                  <a href="#">
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
