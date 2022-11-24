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
            <Col
              xl={3}
              md={4}
              xs={12}
              className="text-center text-md-left mb-3 mb-md-3 mb-lg-0"
            >
              <Row>
                <Col xs={4} lg={2}>
                  <a href="#" onClick={this.props.handleShow}>
                    <Image src="/images/menu.svg" alt="Menu" />
                  </a>
                </Col>
                <Col xs={8} lg={9}>
                  <a href="#">
                    <Image src="/images/Logo.svg" alt="Logo" />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col
              xl={5}
              md={8}
              xs={12}
              className="text-center text-md-left mb-3 mb-md-3  mb-lg-0"
            >
              <span>
                <Image src="/images/arrLeft.svg" alt="Logo" className="pe-2" />
                Valentine’s Day Offers! Buy Two Get One Free{" "}
                <a href="#">Shop Now</a>
                <Image src="/images/arrRight.svg" alt="Logo" className="ps-2" />
              </span>
            </Col>
            <Col
              xl={4}
              md={12}
              xs={12}
              className="text-center text-md-left mb-3 mb-md-0"
            >
              <Row>
                <Col lg={4} xs={4}>
                  <a href="#">
                    <Image src="/images/Phone.svg" alt="Logo" /> Contact Us{" "}
                  </a>
                </Col>
                <Col lg={4} xs={4}>
                  <a href="#">
                    <Image src="/images/Cart.svg" alt="Logo" /> Track Order{" "}
                  </a>
                </Col>
                <Col lg={4} xs={4}>
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
