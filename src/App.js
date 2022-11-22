import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavYeshtery from "./Components/NavTopYeshtery/NavTopYeshtery";
import Product from "./Components/Product";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import OffconvasYeshtery from "./Components/OffconvasYeshtery/OffconvasYeshtery";
import ShowCart from "./Components/ShowCart/ShowCart";

function App() {
  // nav menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // cart
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <div className="App">
      <NavYeshtery handleShow={handleShow} />
      <Product handleShowCart={handleShowCart} />
      <Footer />
      <OffconvasYeshtery show={show} handleClose={handleClose} />
      <ShowCart show={showCart} handleClose={handleCloseCart} />
    </div>
  );
}

export default App;
