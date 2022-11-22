import React, { Component } from "react";

import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "./NavTopYeshtery.scss";

class NavTopYeshtery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbarTopYeshtery pt-2 pb-2">
        <Container>
          <Row>
            <Col lg={3}>
              <Row>
                <Col lg={2}>
                  <a href="#" onClick={this.props.handleShow}>
                    <Image src="/images/menu.svg" alt="Menu" />
                  </a>
                </Col>
                <Col lg={9}>
                  <a href="#">
                    <Image src="/images/Logo.svg" alt="Logo" />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <span>
                <Image src="/images/arrLeft.svg" alt="Logo" className="pe-2" />
                Valentine’s Day Offers! Buy Two Get One Free{" "}
                <a href="#">Shop Now</a>
                <Image src="/images/arrRight.svg" alt="Logo" className="ps-2" />
              </span>
            </Col>
            <Col lg={4}>
              <Row>
                <Col lg={4}>
                  <a href="#">
                    <Image src="/images/Phone.svg" alt="Logo" /> Contact Us{" "}
                  </a>
                </Col>
                <Col lg={4}>
                  <a href="#">
                    <Image src="/images/Cart.svg" alt="Logo" /> Track Order{" "}
                  </a>
                </Col>
                <Col lg={4}>
                  <a href="#">
                    <Image src="/images/location.svg" alt="Logo" /> Find A Store{" "}
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

export default NavTopYeshtery;
