import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div className="menu  pt-2 pb-2">
        <Container>
          <Nav defaultActiveKey="/home" as="ul">
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
              <Nav.Link eventKey="link-2" className="offers">Offers</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    );
  }
}

export default Menu;
