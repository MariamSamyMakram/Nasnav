import React, { Component } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import "./ProductInfo.scss";
import { addCart } from "./../../CartApi.js";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      count: 1,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const product = this.props.product;

    const handleDecrease = () => {
      if (this.state.count > 1) {
        this.setState({
          count: this.state.count - 1,
        });
      }
    };
    const handleIncrease = () => {
      if (this.state.count < product.stock) {
        this.setState({
          count: this.state.count + 1,
        });
      }
    };
    const handleAddCart = () => {
      addCart(product.id, this.state.count).then((data) => {
        this.props.changeVersion();
      });
    };
    return (
      <div className="productInfo pt-5 pb-5">
        <Container>
          <Row>
            <Col lg={6}>
              <Slider
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
                className="Nav1"
              >
                {product.images?.map((image, index) => {
                  return (
                    <div key={index}>
                      <Image src={image} alt="product" />
                    </div>
                  );
                })}
              </Slider>

              <Slider
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                className="Nav2 pt-2"
              >
                {product.images?.map((image, index) => {
                  return (
                    <div key={index}>
                      <Image src={image} alt="product" />
                    </div>
                  );
                })}
              </Slider>
            </Col>
            <Col lg={6}>
              <h5>
                <b>{product.brand}</b>
              </h5>
              <h6 className="mt-3">{product.title}</h6>
              <p className="men">{product.category}</p>
              <ul className="list-unstyled d-flex rating">
                <li className="pe-3">
                  {product.rating ? (
                    <ReactStars
                      count={5}
                      value={product.rating}
                      size={18}
                      isHalf={true}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  ) : (
                    ""
                  )}
                </li>
                <li className="pe-3">
                  <p className="rate">{product.rating} of 5</p>
                </li>
                <li className="pe-3">
                  <p>22 rates</p>
                </li>
              </ul>
              <ul className="list-unstyled d-flex price">
                <li className="pe-3">
                  <h3>
                    {product.price} <span className="LE">LE</span>
                  </h3>
                </li>
                <li className="pe-3">
                  <p className="oldPrice">
                    {Math.floor(
                      product.price / (1 - product.discountPercentage / 100)
                    )}{" "}
                    LE
                  </p>
                </li>
                <li className="pe-3">
                  <p className="offer">{product.discountPercentage}% Off</p>
                </li>
              </ul>
              <hr />
              <h6>Size</h6>
              <ul className="list-unstyled d-flex size">
                <li>
                  <a href="#">Small</a>
                </li>
                <li>
                  <a href="#">Meduim</a>
                </li>
                <li>
                  <a href="#">Large</a>
                </li>
                <li>
                  <a href="#">X Large</a>
                </li>
                <li>
                  <a href="#">XX Large</a>
                </li>
              </ul>
              <hr />
              <h6>Color</h6>
              <ul className="list-unstyled d-flex color">
                {product.images?.map((image, index) => {
                  return (
                    <li className="pe-3" key={index}>
                      <Image src={image} alt="ProductColor" />
                    </li>
                  );
                })}
              </ul>
              <hr />
              <h6>Quantity</h6>
              <ul className="Quantity list-unstyled d-flex row p-1">
                <li className="col-3 d-flex justify-content-start">
                  <button onClick={handleDecrease}>-</button>
                </li>
                <li className="ps-5 pe-5  col-6 text-center">
                  {this.state.count}
                </li>
                <li className="col-3 d-flex justify-content-end">
                  <button onClick={handleIncrease}>+</button>
                </li>
              </ul>
              <ul className="list-unstyled d-flex buttons row">
                <li className="col-6">
                  <Button variant="primary" onClick={handleAddCart}>
                    Add To Cart
                  </Button>
                </li>
                <li className="col-6">
                  <Button variant="primary">Pickup From Store</Button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductInfo;
