import React from "react";

const Header = () => {
  return (
    <header className="sw-navbar">
      <h1 className="logo">Swiggy</h1>
      <nav>
        <a href="#">Search</a>
        <a href="#">Offers</a>
        <a href="#">Help</a>
        <a href="#">Sign In</a>
        <button className="cart-btn">Cart</button>
      </nav>
    </header>
  );
};

export default Header;
