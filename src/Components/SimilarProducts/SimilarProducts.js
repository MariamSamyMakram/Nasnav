import React, { Component } from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import $ from "jquery";
import Slider from "react-slick";

import "./SimilarProducts.scss";

import Product4 from "../../images/product4.png";
import Adidas from "../../images/adidas.svg";

class SimilarProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/products/category/" + this.props.category)
      .then((res) => res.json())
      .then((data) => {
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
      autoplay: true,
    };
    const RelatedProducts = this.state.products;
    console.log(RelatedProducts);
    return (
      <div className="similarProducts pt-5 pb-5">
        <Container>
          <h3>Similar Products</h3>
          <h5 className="mb-5">You may like these products also</h5>
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
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
                          <li className="col-md-7 off-md-1">
                            <h5 className="mb-0">
                              {product.price} <span>LE</span>
                            </h5>
                            {product.discountPercentage ? (
                              <ul className="list-unstyled d-flex">
                                <li className="pe-2">
                                  <p className="mb-0">
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
                          <li className="col-md-4">
                            <p>{product.category}</p>
                          </li>
                        </ul>
                        <ul className="list-unstyled d-flex rating row">
                          <li className="col-md-1"></li>
                          <li className="pe-3 col-md-6">
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
                          <li className="pe-3 col-md-3 mt-1">
                            <p className="rate">{product.rating} of 5</p>
                          </li>
                        </ul>
                        <ul className="list-unstyled d-flex row">
                          <li className="col-md-4">
                            <p>
                              <b>From:</b>UK
                            </p>
                          </li>
                          <li className="col-md-4">
                            <p>
                              <b>To:</b>Eygpt
                            </p>
                          </li>
                          <li className="col-md-4">
                            <p>
                              <b>In:</b>2 days
                            </p>
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default SimilarProducts;
