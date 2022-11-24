import React, { Component } from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import { getProducts } from "./../../ProductApi.js";

import "./SimilarProducts.scss";

import Product4 from "../../images/product4.png";
import Adidas from "../../images/adidas.svg";

class SimilarProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      slideIndex: 0,
      updateCount: 0,
    };
  }
  componentDidMount() {
    getProducts(this.props.category).then((data) => {
      this.setState({
        products: data.products,
      });
    });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const RelatedProducts = this.state.products;

    return (
      <div className="similarProducts pt-5 pb-5">
        <Container>
          <h3>Similar Products</h3>
          <h5 className="mb-5">You may like these products also</h5>
          <div className="row">
            <div className="col-12">
              <Slider
                ref={(slider) => (this.slider = slider)}
                {...settings}
                className="mb-3"
              >
                {this.state.products?.map((product, index) => {
                  return (
                    <Card style={{ width: "18rem" }} key={index}>
                      <Card.Img
                        variant="top"
                        src={product.thumbnail}
                        className="imageProduct"
                      />
                      <Card.Body>
                        <Card.Text className="mb-2">{product.title}</Card.Text>
                        <ul className="list-unstyled d-flex price row">
                          <li className="col-md-7 col-7 off-md-1">
                            <h5 className="mb-0">
                              {product.price} <span>LE</span>
                            </h5>
                            {product.discountPercentage ? (
                              <ul className="list-unstyled d-flex">
                                <li className="pe-2">
                                  <p className="mb-0 oldPrice">
                                    {Math.floor(
                                      product.price /
                                        (1 - product.discountPercentage / 100)
                                    )}{" "}
                                    LE
                                  </p>
                                </li>
                                <li className="pe-2">
                                  <p className="offer mb-0">
                                    {product.discountPercentage}%
                                  </p>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li className="col-md-4 col-4">
                            <p>{product.category}</p>
                          </li>
                        </ul>
                        <ul className="list-unstyled d-flex rating row">
                          <li className="pe-3 col-md-7 col-7">
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
                          <li className="pe-3 col-md-5 col-5 mt-1">
                            <p className="rate">{product.rating} of 5</p>
                          </li>
                        </ul>
                        <ul className="list-unstyled d-flex row mb-0">
                          <li className="col-md-4 col-4">
                            <p className="mb-0">
                              <b>From:</b>UK
                            </p>
                          </li>
                          <li className="col-md-4 col-4">
                            <p className="mb-0">
                              <b>To:</b>Eygpt
                            </p>
                          </li>
                          <li className="col-md-4 col-4">
                            <p className="mb-0">
                              <b>In:</b>2 days
                            </p>
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Slider>
              <progress
                onChange={(e) => this.slider.slickGoTo(e.target.value)}
                value={this.state.slideIndex}
                min={0}
                max={this.state.products.length}
                className="mt-3"
              ></progress>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default SimilarProducts;
