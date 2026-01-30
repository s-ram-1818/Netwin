import React from "react";

const Hero = () => {
  return (
    <section className="sw-hero">
      <h1>Order food & groceries.</h1>
      <h1> Discover best restaurants. Swiggy it!</h1>
      <div className="sw-search-box">
        <input type="text" placeholder="Enter your delivery location" />
        <button>Find Food</button>
      </div>
    </section>
  );
};

export default Hero;
