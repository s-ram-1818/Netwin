import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NetWin
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <NavLink className="nav-link active" to="/careers">
                  Careers
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  about
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/menu"
                >
                  Menu
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/menu/action">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/menu/another-action"
                    >
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/menu/something-else"
                    >
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
