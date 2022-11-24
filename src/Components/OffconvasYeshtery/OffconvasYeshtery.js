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
      <>
        <Offcanvas
          className="menuOffcanvas"
          show={this.props.show}
          onHide={this.props.handleClose}
        >
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
                <Nav.Link eventKey="link-3">Kids</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-4">Best Sellers</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-5">New Arrivals</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="pe-5">
                <Nav.Link eventKey="link-6" className="offers">
                  Offers
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}
export default OffconvasYeshtery;
