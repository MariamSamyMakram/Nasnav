import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer pt-5">
        <Container>
          <Row>
            <Col lg={5} className="pe-lg-5">
              <Image src="/images/Logo2.svg" alt="logo" />
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit
              </p>
            </Col>
            <Col lg={7} className="border_left ps-lg-5">
              <h6>Subscribe to our newsletter</h6>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Subscribe <Image src="/images/subscribe.svg" />
                </Button>
              </InputGroup>
              <Row className="mt-5">
                <Col lg={7} md={6} xs={6}>
                  <ul className="list-unstyled ml-0">
                    <li className="mb-3">
                      <a href="#">About Us</a>
                    </li>
                    <li className="mb-3">
                      <a href="#">Contact Us </a>
                    </li>
                    <li className="mb-3">
                      <a href="#">Track Order</a>
                    </li>
                    <li className="mb-3">
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li className="mb-3">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="mb-3">
                      <a href="#">Sell With Us</a>
                    </li>
                    <li className="mb-3">
                      <a href="#">Shippings and returns</a>
                    </li>
                  </ul>
                </Col>
                <Col lg={5} md={6} xs={6} className=" border_left ps-0 ps-md-5">
                  <ul className="list-unstyled ml-0">
                    <li className="mb-3">
                      <a href="#">
                        <Image src="/images/facebook.svg" />
                        /YESHTERY
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#">
                        <Image src="/images/linkedin.svg" />
                        /YESHTERY
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#">
                        <Image src="/images/insta.svg" />
                        /YESHTERY
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#">
                        <Image src="/images/twitter.svg" />
                        /YESHTERY
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className="pt-3 pb-3 copy">
            <Col xl={5} lg={4} xs={12} md={4}>
              <p className="pt-2 text-center text-md-center">© 2021 yeshtery, all rights reserved.</p>
            </Col>
            <Col xl={5} lg={4} xs={12} md={4}>
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="pe-3">
                  <Image src="/images/delivery.png" alt="img" />
                </li>
                <li className="pe-3">
                  <Image src="/images/visa.png" alt="img" />
                </li>
                <li className="pe-3">
                  <Image src="/images/cicle.png" alt="img" />
                </li>
              </ul>
            </Col>
            <Col xl={2} lg={4} xs={12} md={4}>
              <p className="pt-2 text-center text-md-center">
                Powered by <Image src="/images/nasnav.svg" alt="nasnav" />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
