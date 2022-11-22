import React, { Component } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import "./BreadcrumbYeshtery.scss";

class BreadcrumbYeshtery extends Component {
  render() {
    return (
      <div className="BreadcrumbYeshtery pt-2 pb-2">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    );
  }
}

export default BreadcrumbYeshtery;
