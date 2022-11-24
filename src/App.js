import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavYeshtery from "./Components/NavTopYeshtery/NavTopYeshtery";
import Product from "./Components/Product";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import OffconvasYeshtery from "./Components/OffconvasYeshtery/OffconvasYeshtery";
const ShowCart = React.lazy(() => import("./Components/ShowCart/ShowCart"));

function App() {
  // nav menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cartVersion, setCartVersion] = useState(Math.random());

  // cart
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => {
    setShowCart(true);
    changeVersion();
  };

  const changeVersion = () => {
    setCartVersion(Math.random());
  };

  return (
    <div className="App">
      <NavYeshtery handleShow={handleShow} />
      <Product
        handleShowCart={handleShowCart}
        cartVersion={cartVersion}
        changeVersion={changeVersion}
      />
      <Footer />
      <OffconvasYeshtery show={show} handleClose={handleClose} />
      <ShowCart
        show={showCart}
        handleClose={handleCloseCart}
        cartVersion={cartVersion}
      />
    </div>
  );
}

export default App;
