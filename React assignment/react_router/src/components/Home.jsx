import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-4">Welcome to NetWin</h1>
          <p className="lead">Your gateway to innovation and excellence.</p>
          <p>
            We are a leading company dedicated to delivering exceptional
            services and solutions to our clients worldwide.
          </p>
          <div className="mt-4">
            <h3>Why Choose Us?</h3>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                Expert team with years of experience
              </li>
              <li className="list-group-item">
                Innovative solutions tailored to your needs
              </li>
              <li className="list-group-item">24/7 customer support</li>
              <li className="list-group-item">
                Competitive pricing and flexible packages
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
