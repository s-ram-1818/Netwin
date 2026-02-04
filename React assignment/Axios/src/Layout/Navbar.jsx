import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary top-0 w-100">
        <div className="container-fluid ">
          <span className="navbar-brand mb-0 h1">My App</span>
          <div className="container d-flex justify-content-center">
            <NavLink to="/" className="nav-link mx-3" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/recipes" className="nav-link mx-3">
              Recipes
            </NavLink>
            <NavLink to="/about" className="nav-link mx-3">
              About
            </NavLink>
            <NavLink to="/login" className="nav-link mx-3">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
