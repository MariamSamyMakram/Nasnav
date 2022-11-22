import React, { Component } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav } from "react-bootstrap";

import "./OffconvasYeshtery.scss";

class OffconvasYeshtery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="offconvasYeshtery">
        <Offcanvas show={this.props.show} onHide={this.props.handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              defaultActiveKey="/home"
              as="ul"
              className="d-block"
              id="navOffcanvas"
            >
              <Nav.Item as="li" className="pe-5">
                <Nav.Link href="/home">Men</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-1">Women</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-2">Unisex</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-2">Kids</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-2">Best Sellers</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-2">New Arrivals</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-2" className="offers">
                  Offers
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
}
export default OffconvasYeshtery;
